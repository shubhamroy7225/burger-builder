import React from "react";
import Logo from "../../Logo/Logo";
import Navigationitems from "../NavigatonItems/NavigationItems";
import Drawertoggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import "./Toolbar.css";
function Toolbar(props) {
  return (
    <header className="Toolbar">
      <Drawertoggle clicked={props.drawerToggle}/>
      <Logo />
      <nav className="DesktopOnly">
        <Navigationitems />
      </nav>
    </header>
  );
}
export default Toolbar;
