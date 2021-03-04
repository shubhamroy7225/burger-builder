import React, { useState } from "react";
import Aux from "../../hoc/Aux";
import Sidedrawer from "../Navigation/SideDrawer/SideDrawer";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Backdrop from "../UI/Backdrop/Backdrop";
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
