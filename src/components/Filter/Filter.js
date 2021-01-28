import React from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import contactsActions from "../../redux/contacts/contactsActions";
import Label from "./FilterStyled";

const Filter = ({ value, onChange }) => {
  return (
    // <CSSTransition
    //   in={contacts.length > 1}
    //   classNames="filterScale"
    //   timeout={250}
    //   unmountOnExit
    // >
    <Label>
      Find contacts by name
      <input
        className="input"
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.currentTarget.value)}
      />
    </Label>
    // </CSSTransition>
  );
};

const mSTP = (state) => ({
  value: state.contacts.filter,
});

const mDTP = {
  onChange: contactsActions.changeFilter,
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default connect(mSTP, mDTP)(Filter);
