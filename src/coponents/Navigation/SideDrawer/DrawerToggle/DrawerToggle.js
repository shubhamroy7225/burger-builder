import React from "react";
import "./DrawerToggle.css"
function Drawertoggle(props) {
  return (
    <>
      <div className="DrawerToggle" onClick={props.clicked}>
          <div></div>
          <div></div>
          <div></div>
      </div>
    </>
  );
}
export default Drawertoggle
