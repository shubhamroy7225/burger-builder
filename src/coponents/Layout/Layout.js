import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css"
const layout = (props) => {
  return (
  <Aux>
      <div>
        <Toolbar></Toolbar>
        SideDrawer, Backdrop</div>
      <main className="Content">
          {props.children}
      </main>
  </Aux>
  );
};
export default layout;
