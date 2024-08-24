import { useRef } from "react";
import { createSlice } from "@reduxjs/toolkit";
import dummyData from "./dummyJson.json";
import newContactsFromFile from "./newContacts.json";

// get data from local storage
let contacts = JSON.parse(localStorage.getItem("contacts"));
let conversations = JSON.parse(localStorage.getItem("conversations"));
let newContacts = JSON.parse(localStorage.getItem("newContacts"));

const formatTimestamp = (dateObject) => {
  const d = new Date(dateObject);

  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  const date = `${day}-${month}-${year}`;

  // Get hours and minutes from the Date object
  let hours = d.getHours();
  let minutes = d.getMinutes();

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

  const time = `${hours}:${minutes} ${ampm}`;

  return { date, time };
};

const formattedContacts = dummyData.contacts.map((contact) => {
  contact.timestamp = formatTimestamp(contact.timestamp);
  contact.updatedAt = formatTimestamp(contact.updatedAt);
  return contact;
});

const formattedConversations = dummyData.conversations.map((conversation) => {
  conversation.messages.map((message) => {
    message.timestamp = formatTimestamp(message.timestamp);
  });
  return conversation;
});

// if the data is not available in the local storage
if (!contacts) {
  localStorage.setItem("contacts", JSON.stringify(formattedContacts));
}

if (!conversations) {
  localStorage.setItem("conversations", JSON.stringify(formattedConversations));
}

if (!newContacts) {
  localStorage.setItem("newContacts", JSON.stringify(newContactsFromFile));
}

const currentContact = JSON.parse(localStorage.getItem("currentContact"));
const currentConversation = JSON.parse(
  localStorage.getItem("currentConversation")
);

const INITIAL_STATE = {
  contacts: JSON.parse(localStorage.getItem("contacts")),
  conversations: conversations || formattedConversations,
  newContacts: newContacts || newContactsFromFile,
  currentContact: currentContact || null,
  currentConversation: currentConversation || null,
  showNewContacts: false,
  searchTerm: "",
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: INITIAL_STATE,
  reducers: {
    selectConversation: (state, action) => {
      const conversations = JSON.parse(localStorage.getItem("conversations"));
      const contacts = JSON.parse(localStorage.getItem("contacts"));

      // setting the current conversation
      const foundConversation = conversations.find(
        (conversation) => conversation.id === action.payload
      );

      if (foundConversation) {
        state.currentConversation = foundConversation;
      } else {
        const newConversation = {
          id: conversations.length + 1,
          type: "individual",
          contactId: action.payload,
          messages: [],
        };
        conversations.push(newConversation);

        state.currentConversation = newConversation;
      }

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

      // resetting for after search contact selection
      state.contacts = contacts;
      state.searchTerm = "";
    },

    sendMessage: (state, action) => {
      const newMessage = {
        id: state.currentConversation.messages.length + 1,
        sender: "You",
        text: action.payload,
        timestamp: formatTimestamp(new Date().toString()),
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
        if (conversation.contactId === state.currentConversation.contactId) {
          return state.currentConversation;
        }
        return conversation;
      });

      // updating the conversations in local storage
      localStorage.setItem(
        "conversations",
        JSON.stringify(state.conversations)
      );

      /* Updating the contacts list (sorting by latest) */
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

      // adding the contact to contacts list
      state.contacts = [
        {
          ...action.payload,
          timestamp: formatTimestamp(new Date().toString()).time,
          updatedAt: formatTimestamp(new Date().toString()).time,
        },
        ...state.contacts,
      ];

      // updating teh contacts in local storage
      localStorage.setItem("contacts", JSON.stringify(state.contacts));

      // update the conversations
      state.conversations = [
        ...state.conversations,
        {
          id: state.conversations.length + 1,
          type: "individual",
          contactId: action.payload.id,
          messages: [],
        },
      ];

      // upldating local storage conversations
      localStorage.setItem(
        "conversations",
        JSON.stringify(state.conversations)
      );

      // setting the new added contact as current contact
      // update the conversation first
      const id = state.conversations.length - 1;
      state.currentConversation = {
        id: id,
        contactId: action.payload.id,
        messages: [],
      };

      // updating the current contact in local storage
      localStorage.setItem(
        "currentConversation",
        JSON.stringify(state.currentConversation)
      );

      // updating the current contact in the state
      state.currentContact = {
        ...action.payload,
        timestamp: formatTimestamp(new Date().toString()).time,
        updatedAt: formatTimestamp(new Date().toString()).time,
      };

      // updating the current contact in the local storage
      localStorage.setItem(
        "currentContact",
        JSON.stringify(state.currentContact)
      );

      /* Removing the contact from the new contacts list after adding it to the contacts list */
      // get the new contacts from local storage
      const newContactsList = JSON.parse(localStorage.getItem("newContacts"));

      // updating the new contacts
      const updatedNewContactsList = newContactsList.filter(
        (contact) => contact.id !== action.payload.id
      );

      state.newContacts = [...updatedNewContactsList];
      // updating the new contacts in local storage
      localStorage.setItem(
        "newContacts",
        JSON.stringify(updatedNewContactsList)
      );
    },
    filterContacts: (state, action) => {
      state.searchTerm = action.payload;

      state.contacts = INITIAL_STATE.contacts.filter((contact) =>
        contact.name
          .toLowerCase()
          .trim()
          .includes(state.searchTerm.toLowerCase().trim())
      );
    },
  },
});

export const chatReducer = chatSlice.reducer;
export const {
  selectConversation,
  sendMessage,
  setShowNewContacts,
  createConversation,
  filterContacts,
  searchTerm,
} = chatSlice.actions;
export const chatSelector = (state) => state.chatReducer;
