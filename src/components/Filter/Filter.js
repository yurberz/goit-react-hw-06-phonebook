import { connect } from "react-redux";
import PropTypes from "prop-types";
import Label from "./FilterStyled";
import contactsActions from "../../redux/contacts/contactsActions";

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input
        className="input"
        type="text"
        value={value}
        onChange={(evt) => onChange(evt.currentTarget.value)}
      />
    </Label>
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
