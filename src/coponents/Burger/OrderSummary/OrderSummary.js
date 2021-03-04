import React from "react";
import Aux from "../../../hoc/Aux";
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
      <p>Continue to Checkout?</p>
    </Aux>
  );
}
export default Ordersummary
