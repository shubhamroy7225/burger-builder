import React, { useState } from "react";
import Aux from "../Aux/Aux";
import Sidedrawer from "../../coponents/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../coponents/Navigation/Toolbar/Toolbar";
import "./Layout.css";
const Layout = (props) => {
  const [backdrop, setBackdrop] = useState(false);
  const closeSidedrawer = () => {
    setBackdrop(false);
  };
  const drawerToggleHandler=()=>{
    setBackdrop(!backdrop)
  }
  return (
    <Aux>
      <Toolbar drawerToggle={drawerToggleHandler}/>
      <Sidedrawer open={backdrop} closed={closeSidedrawer} />
      <main className="Content">{props.children}</main>
    </Aux>
  );
};
export default Layout;
