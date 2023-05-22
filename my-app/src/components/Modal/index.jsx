import PropTypes from "prop-types";
import "./modal.scss";
import { useDispatch } from "react-redux";
import { toggleModalStatus } from "../../redux/actions/modal";

export default function Modal(props) {
  const dispatch = useDispatch();
  function closeModal(event) {
    console.log();
    if (!event.target.closest(".card") || event.target.closest(".close-btn")) {
      dispatch(toggleModalStatus());
    }
  }
  return (
    <div
      className={`${props.modalIsOpen ? "modal-wrap--active" : ""} modal-wrap`}
      onClick={closeModal}
    >
      <div className="card w-50 text-bg-dark mb-3">
        <h5 className="card-header">{props.title}</h5>
        {props.closeButton && (
          <button className="close-btn">
            <span></span>
            <span></span>
          </button>
        )}
        <div className="card-body">
          <div
            className={`card-text ${
              typeof props.content === "string"
                ? "modal__content"
                : "modal__content--scroll"
            }`}
          >
            {props.content}
          </div>
          <div className="main-modal-actions">{props.actions}</div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  actions: PropTypes.array,
  closeButton: PropTypes.bool,
  modalIsOpen: PropTypes.bool,
  onCloseClick: PropTypes.func,
  text: PropTypes.string,
  title: PropTypes.string,
};
