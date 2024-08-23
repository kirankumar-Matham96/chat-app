import { createSlice } from "@reduxjs/toolkit";
import dummyData from "./dummyJson.json";
import newContacts from "./newContacts.json";

const INITIAL_STATE = {
  contacts: dummyData.contacts,
  currentContact: dummyData.contacts[0],
  conversations: dummyData.conversations,
  currentConversation: dummyData.conversations[0],
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
      state.loading = true;
      state.currentConversation.messages =
        state.currentConversation.messages.map((message) => {
          const newTS = formatTimestamp(message.timestamp);
          return { ...message, timestamp: newTS };
        });
    },
    selectConversation: (state, action) => {
      // setting the current conversation
      state.currentConversation = dummyData.conversations.find(
        (conversation) => conversation.id === action.payload
      );
      // setting the current contact
      state.currentContact = dummyData.contacts.find(
        (contact) => contact.id === action.payload
      );
    },
    sendMessage: (state, action) => {
      const newMessage = {
        id: state.currentConversation.messages.length + 1,
        sender: "You",
        text: action.payload,
        timestamp: new Date().toString(),
      };

      state.currentConversation.messages = [
        ...state.currentConversation.messages,
        newMessage,
      ];
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

      // setting the current conversation
      // state.currentConversation = dummyData.conversations.find(
      //   (conversation) => conversation.id === action.payload
      // );

      state.currentConversation = {
        id: dummyData.conversations.length + 1,
        contactId: dummyData.conversations.length + 1,
        messages: [],
      };

      // setting the current contact
      // state.currentContact = dummyData.contacts.find(
      //   (contact) => contact.id === action.payload
      // );

      state.currentContact = {
        ...action.payload,
        timestamp: new Date().toString(),
        updatedAt: new Date().toString(),
      };
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
