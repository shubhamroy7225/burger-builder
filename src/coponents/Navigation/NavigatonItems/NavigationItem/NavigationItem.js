import React from "react";
import "./NavigationItem.css";
function Navigationitem(props) {
  return (
    <>
      <li className="NavigationItem">
        <a className={props.active?"active":null} href={props.link}>
          {props.children}
        </a>
      </li>
    </>
  );
}
export default Navigationitem;
