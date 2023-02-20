import PropTypes from 'prop-types';
const initialState = {
  name: '',
  number: '',
};
export default initialState;
initialState.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.number.isRequired,
};
