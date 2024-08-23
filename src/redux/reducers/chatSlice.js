import { createSlice } from "@reduxjs/toolkit";
import dummyData from "./dummyJson.json";
import newContactsFromFile from "./newContacts.json";

// get data from local storage
let contacts = JSON.parse(localStorage.getItem("contacts"));
let conversations = JSON.parse(localStorage.getItem("conversations"));
let newContacts = JSON.parse(localStorage.getItem("newContacts"));

// if the data is not available in the local storage
console.log("from LS contacts => ", contacts);
contacts ||
  localStorage.setItem("contacts", JSON.stringify(dummyData.contacts));

conversations ||
  localStorage.setItem(
    "conversations",
    JSON.stringify(dummyData.conversations)
  );

newContacts ||
  localStorage.setItem("newContacts", JSON.stringify(newContactsFromFile));

const currentContact = JSON.parse(localStorage.getItem("currentContact"));
const currentConversation = JSON.parse(
  localStorage.getItem("currentConversation")
);

const INITIAL_STATE = {
  contacts: dummyData.contacts,
  currentContact: currentContact || null,
  conversations: dummyData.conversations,
  currentConversation: currentConversation || null,
  newContacts,
  showNewContacts: false,
  loading: false,
  error: null,
};

const formatTimestamp = (dateObject) => {
  const date = new Date(dateObject);

  // Get hours and minutes from the Date object
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Determine AM or PM
  const ampm = hours >= 12 ? "pm" : "am";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Pad hours and minutes with leading zero if necessary
  hours = hours < 10 ? "0" + hours : hours;

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${hours}:${minutes} ${ampm}`;
};

const chatSlice = createSlice({
  name: "chat",
  initialState: INITIAL_STATE,
  reducers: {
    initialLoad: (state) => {
      const currentConversation = JSON.parse(
        localStorage.getItem("currentConversation")
      );
      if (currentConversation) {
        state.currentConversation = currentConversation;
      }

      if(contacts){
        state.contacts = contacts;
      }
    },

    selectConversation: (state, action) => {
      const conversations = JSON.parse(localStorage.getItem("conversations"));
      const contacts = JSON.parse(localStorage.getItem("contacts"));

      // setting the current conversation
      state.currentConversation = conversations.find(
        (conversation) => conversation.id === action.payload
      );

      localStorage.setItem(
        "currentConversation",
        JSON.stringify(state.currentConversation)
      );

      // setting the current contact
      state.currentContact = contacts.find(
        (contact) => contact.id === action.payload
      );
      localStorage.setItem(
        "currentContact",
        JSON.stringify(state.currentContact)
      );
    },

    sendMessage: (state, action) => {
      const newMessage = {
        id: state.currentConversation.messages.length + 1,
        sender: "You",
        text: action.payload,
        timestamp: new Date().toString(),
      };

      // setting the message in currentConversation
      state.currentConversation.messages = [
        ...state.currentConversation.messages,
        newMessage,
      ];

      // updating current conversation in localstorage
      localStorage.setItem(
        "currentConversation",
        JSON.stringify(state.currentConversation)
      );

      // updating the conversations with new message
      state.conversations = state.conversations.map((conversation) => {
        if (conversation.id === state.currentConversation.id) {
          return state.currentConversation;
        }
        return conversation;
      });

      // updating the conversations in local storage
      localStorage.setItem(
        "conversations",
        JSON.stringify(state.conversations)
      );

      // Updating the contacts list (sorting by latest)

      /**
       * When new message is added, find the contact by contactId in the conversation.
       * Then, find the contact in the list.
       * Remove that contact and store it in a variable.
       * Now, add this contact at the top of contacts list.
       * Update the state.
       */

      // When new message is added, find the contact by contactId in the conversation
      const currentContact = state.contacts.find(
        (contact) => contact.id === state.currentContact.id
      );

      // Remove that contact and store it in a variable.
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== currentContact.id
      );

      // Now, add this contact at the top of contacts list.
      state.contacts = [currentContact, ...state.contacts];

      localStorage.setItem("contacts", JSON.stringify(state.contacts));
    },

    setShowNewContacts: (state, action) => {
      state.showNewContacts = true;
    },

    createConversation: (state, action) => {
      // closing the pop-up
      state.showNewContacts = false;

      // adding the contact
      state.contacts = [
        {
          ...action.payload,
          timestamp: new Date().toString(),
          updatedAt: new Date().toString(),
        },
        ...state.contacts,
      ];

      localStorage.setItem("contacts", JSON.stringify(state.contacts));

      // setting the current conversation
      // state.currentConversation = dummyData.conversations.find(
      //   (conversation) => conversation.id === action.payload
      // );

      state.currentConversation = {
        id: dummyData.conversations.length + 1,
        contactId: dummyData.conversations.length + 1,
        messages: [],
      };
      localStorage.setItem(
        "currentConversation",
        JSON.stringify(state.currentConversation)
      );

      // setting the current contact
      // state.currentContact = dummyData.contacts.find(
      //   (contact) => contact.id === action.payload
      // );

      state.currentContact = {
        ...action.payload,
        timestamp: new Date().toString(),
        updatedAt: new Date().toString(),
      };
      localStorage.setItem(
        "currentContact",
        JSON.stringify(state.currentContact)
      );
    },
  },
});

export const chatReducer = chatSlice.reducer;
export const {
  initialLoad,
  selectConversation,
  sendMessage,
  setShowNewContacts,
  createConversation,
} = chatSlice.actions;

export const chatSelector = (state) => state.chatReducer;
