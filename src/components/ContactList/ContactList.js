import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactsActions from "../../redux/contacts/contactsActions";
import Div from "./ContactListStyled";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <Div>
      <TransitionGroup component="ul">
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames="itemFade">
            <li className="contactList__item">
              <p>
                {name}: {number}
              </p>
              <button
                className="delBtn"
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Div>
  );
};

const mSTP = (state) => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return {
    contacts: visibleContacts,
  };
};

const mDTP = {
  onDeleteContact: contactsActions.delContact,
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default connect(mSTP, mDTP)(ContactList);
