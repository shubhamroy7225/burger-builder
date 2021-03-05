import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigatonItems/NavigationItems";
import Aux from "../../../hoc/Aux/Aux"
import Backdrop from "../../UI/Backdrop/Backdrop"
import "./SideDrawer.css";
function Sidedrawer(props) {
  let attachedClasses = ['SideDrawer','Close']
  if(props.open){
    attachedClasses = ['SideDrawer','Open']
  }
  return (
    <Aux>
      <Backdrop show={props.open} closeModal={props.closed}>tis is backdrop</Backdrop>
      <div className={attachedClasses.join(' ')}>
     <Logo />
      <NavigationItems />
    </div>   
    </Aux>
    
  );
}
export default Sidedrawer;
