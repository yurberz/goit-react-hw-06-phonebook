import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "./AppStyled";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { CSSTransition } from "react-transition-group";

class App extends Component {
  render() {
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

        {!this.props.contacts.length && (
          <p className="text">Your phonebook is empty. Please add contact.</p>
        )}
      </Container>
    );
  }
}

const mSTP = (state) => {
  return { contacts: state.contacts.items };
};

export default connect(mSTP)(App);
