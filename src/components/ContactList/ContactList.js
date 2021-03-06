import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Div from "./ContactListStyled";
import contactsActions from "../../redux/contacts/contactsActions";

const ContactList = ({ contacts, value, onDeleteContact, onChange }) => {
  const onHandleDelete = (evt) => {
    const { id } = evt.currentTarget;

    onDeleteContact(id);

    if (
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      ).length < 2
    ) {
      onChange("");
    }
  };

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
                id={id}
                onClick={onHandleDelete}
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
    value: state.contacts.filter,
  };
};

const mDTP = {
  onDeleteContact: contactsActions.delContact,
  onChange: contactsActions.changeFilter,
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
