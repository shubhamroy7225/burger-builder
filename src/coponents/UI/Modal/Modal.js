import React, { useMemo, useRef } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../Backdrop/Backdrop";
import "./Modal.css";
function Modal(props) {
  const prev = useRef(props);
  let moalvalue = useMemo(() => {
    if (prev.current.show != props.show) {
      return (
        <Aux>
          <Backdrop show={props.show} closeModal={props.closeModal} />
          <div
            className="Modal"
            style={{
              transform: props.show ? "translateY(0)" : "translate(-100vh)",
              opacity: props.show ? "1" : "0",
            }}
          >
            {props.children}
          </div>
        </Aux>
      );
    }
  }, [props.show]);

  return (<div>{moalvalue}</div>);
}
export default Modal;
