import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contactsActions";

const addContact = (state, action) => {
  return [...state, action.payload.contact];
};

const delContact = (state, action) => {
  return state.filter((contact) => contact.id !== action.payload);
};

const items = createReducer([], {
  [contactsActions.addContact]: addContact,
  [contactsActions.delContact]: delContact,
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});

//   addContact = ({ name, number }) => {
//     const { contacts } = this.state;
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     if (
//       contacts.find(
//         (contact) => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       this.setState((state) => ({ showByUsedNtf: !state.showByUsedNtf }));
//     } else if (contacts.find((contact) => contact.number === number)) {
//       this.setState((state) => ({ showByUsedNtf: !state.showByUsedNtf }));
//     } else if (name.trim() === "" || number.trim() === "") {
//       this.setState((state) => ({ showEmptyNtf: !state.showEmptyNtf }));
//     } else {
//       this.setState(({ contacts }) => ({
//         contacts: [contact, ...contacts],
//       }));
//     }
//   };
