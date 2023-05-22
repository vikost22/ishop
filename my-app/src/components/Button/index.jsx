import PropTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      className={`btn ${props.btnStyle} m-2`}
      onClick={() => {
        props.onButtonClick(props.param);
      }}
      disabled={props.isDisabled}
    >
      {props.text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  btnStyle: PropTypes.string,
  isDisabled: PropTypes.bool,
  onButtonClick: PropTypes.func,
  param: PropTypes.object,
};
Button.defaultProps = {
  param: {}
}