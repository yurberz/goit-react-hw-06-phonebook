import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction("contact/add", (payload) => ({
  payload: {
    contact: {
      ...payload,
      id: shortid.generate(),
    },
  },
}));

const delContact = createAction("contact/del");

const changeFilter = createAction("contacts/changeFilter");

const contactsFromLS = createAction("contacts/contactsFromLS");

export default { addContact, delContact, changeFilter, contactsFromLS };
