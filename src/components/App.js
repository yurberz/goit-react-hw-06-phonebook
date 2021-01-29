import React, { Component } from "react";
import Container from "./AppStyled";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const contactsFromLS = JSON.parse(contacts);

  //   if (contactsFromLS) {
  //     contactsFromLS.length && this.setState({ contacts: [...contactsFromLS] });
  //   }
  // }

  // componentDidUpdate(_, prevState) {
  //   const prevContacts = prevState.contacts;
  //   const nextContacts = this.state.contacts;

  //   if (prevContacts !== nextContacts) {
  //     localStorage.setItem("contacts", JSON.stringify(nextContacts));
  //   }
  // }

  render() {
    // const { contacts, filter, showEmptyNtf, showByUsedNtf } = this.state;
    // const filteredContacts = this.getContacts();

    return (
      <Container>
        <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="h1"
          unmountOnExit
        >
          <h1 className="h1Title">Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        <h2 className="h2Title">Contacts</h2>

        <Filter />

        <ContactList />

        {/* {!contacts.length && (
          <p className="text">Your phonebook is empty. Please add contact.</p>
        )} */}
      </Container>
    );
  }
}

export default App;
