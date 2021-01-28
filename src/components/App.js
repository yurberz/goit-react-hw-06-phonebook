import React, { Component } from "react";
import Container from "./AppStyled";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { Empty, ByUsed } from "./Notifications/Notifications";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  // state = {
  //   contacts: [],
  //   filter: "",
  //   showEmptyNtf: false,
  //   showByUsedNtf: false,
  // };

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

  // addContact = ({ name, number }) => {
  //   const { contacts } = this.state;
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.find(
  //       (contact) => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     this.setState((state) => ({ showByUsedNtf: !state.showByUsedNtf }));
  //   } else if (contacts.find((contact) => contact.number === number)) {
  //     this.setState((state) => ({ showByUsedNtf: !state.showByUsedNtf }));
  //   } else if (name.trim() === "" || number.trim() === "") {
  //     this.setState((state) => ({ showEmptyNtf: !state.showEmptyNtf }));
  //   } else {
  //     this.setState(({ contacts }) => ({
  //       contacts: [contact, ...contacts],
  //     }));
  //   }
  // };

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

        {/* <CSSTransition
          in={showEmptyNtf}
          onEntered={() => this.setState({ showEmptyNtf: false })}
          timeout={2000}
          classNames="ntf"
          unmountOnExit
        >
          <Empty />
        </CSSTransition> */}

        {/* <CSSTransition
          in={showByUsedNtf}
          onEntered={() => this.setState({ showByUsedNtf: false })}
          timeout={2000}
          classNames="ntf"
          unmountOnExit
        >
          <ByUsed />
        </CSSTransition> */}
      </Container>
    );
  }
}

export default App;
