import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContact = (state, action) => {
  if (
    state &&
    state.find(
      (contact) =>
        action.payload.contact.name.toLowerCase() === contact.name.toLowerCase()
    )
  ) {
    alert("Is already in use!");
  } else if (
    state.find((contact) => action.payload.contact.number === contact.number)
  ) {
    alert("Is already in use!");
  } else if (
    action.payload.contact.name.trim() === "" ||
    action.payload.contact.number.trim() === ""
  ) {
    alert("Enter the contact's name and(or) phone number!");
  } else {
    return [...state, action.payload.contact];
  }
  // return [...state, action.payload.contact];
};

const delContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.delContact]: delContact,
  [contactsActions.contactsFromLS]: (_, action) => action.payload,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
