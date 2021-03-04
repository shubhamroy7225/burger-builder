import React from "react";
import "./Backdrop.css";
function Backdrop(props) {
  return (
    <>
      {props.show ? (
        <div className="Backdrop" onClick={props.closeModal}>
          backdrop{" "}
        </div>
      ) : null}
    </>
  );
}
export default Backdrop;
