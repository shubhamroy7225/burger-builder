import React from "react";
import PropTypes from "prop-types"
import "./Burgeringredient.css"
const burgerIngredient = (props) => {
  let igredient = null;
  switch (props.type) {
    case "bread-bottom":
      igredient = <div className="BreadBottom"></div>;
      break;
    case "bread-top":
      igredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case "meat":
      igredient = <div className="Meat"></div>;
      break;
    case "cheese":
      igredient = <div className="Cheese"></div>;
      break;
    case "bacon":
      igredient = <div className="Bacon"></div>;
      break;
    case "salad":
      igredient = <div className="Salad"></div>;
      break;
    default:
      igredient = null;
  }

  return igredient;
};

burgerIngredient.prototypes = {
    type:PropTypes.string.isRequired
}
export default burgerIngredient;
