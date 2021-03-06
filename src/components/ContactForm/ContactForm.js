import { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import Form from "./ContactFormStyled";
import { Empty, ByUsed } from "../Notifications/Notifications";
import contactsAction from "../../redux/contacts/contactsActions";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    showEmptyNtf: false,
    showByUsedNtf: false,
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");

    if (contacts) {
      this.props.contactsFromLS(JSON.parse(contacts));
    }
  }

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;

    if (prevProps.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;

    if (
      this.props.contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      this.setState((state) => ({ showByUsedNtf: !state.showByUsedNtf }));
    } else if (
      this.props.contacts.find((contact) => contact.number === number)
    ) {
      this.setState((state) => ({ showByUsedNtf: !state.showByUsedNtf }));
    } else if (name.trim() === "" || number.trim() === "") {
      this.setState((state) => ({ showEmptyNtf: !state.showEmptyNtf }));
    } else {
      this.props.onSubmit({ name, number });
    }

    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number, showEmptyNtf, showByUsedNtf } = this.state;

    return (
      <>
        <Form id="contact" onSubmit={this.handleSubmit}>
          <label className="label">
            Name
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Type to name"
            />
          </label>

          <label className="label">
            Phone number
            <input
              className="input"
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
              placeholder="Type to phone(e.g. 111-11-11)"
            />
          </label>

          <button type="submit" className="submitBtn">
            Add contact
          </button>
        </Form>

        <CSSTransition
          in={showEmptyNtf}
          onEntered={() => this.setState({ showEmptyNtf: false })}
          timeout={2000}
          classNames="ntf"
          unmountOnExit
        >
          <Empty />
        </CSSTransition>

        <CSSTransition
          in={showByUsedNtf}
          onEntered={() => this.setState({ showByUsedNtf: false })}
          timeout={2000}
          classNames="ntf"
          unmountOnExit
        >
          <ByUsed />
        </CSSTransition>
      </>
    );
  }
}

const mSTP = (state) => {
  return { contacts: state.contacts.items };
};

const mDTP = {
  onSubmit: contactsAction.addContact,
  contactsFromLS: contactsAction.contactsFromLS,
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mSTP, mDTP)(ContactForm);
