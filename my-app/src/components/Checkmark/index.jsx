import "./checkmark.scss";
export default function Checkmark(props) {
  return (
    <div className={`modal-wrap ${props.backShow ? "modal-wrap--active" : ""}`}>
      <div className={`circle-loader ${props.complate ? "load-complete" : ""}`}>
        <div
          className="checkmark draw"
          style={props.complate ? { display: "block" } : null}
        ></div>
      </div>
    </div>
  );
}
