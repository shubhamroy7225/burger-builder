import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";
import "./OrderSummary.css"
function Ordersummary(props) {
  const ingredients = Object.keys(props.ingredients).map((igkey, index) => {
    return (
      <span key={index}>
        <span className='Span'>{igkey}</span>:
        {props.ingredients[igkey]}<br></br>
      </span>
    );
  });
  return (
    <Aux>
      <h1>Your Order</h1>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredients}</ul>
      <p><strong>Total Price:${props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.closeModal}>Cancel</Button>
      <Button btnType="Success" clicked={props.continueBuy}>Continue</Button>
    </Aux>
  );
}
export default Ordersummary
