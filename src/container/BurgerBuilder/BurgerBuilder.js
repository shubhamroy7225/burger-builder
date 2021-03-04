import React, { useState } from "react";
import { Buildcontrols } from "../../coponents/Burger/BuildControls/BuildControls";
import Burger from "../../coponents/Burger/Burger";
import Aux from "../../hoc/Aux";
const BurgerBuilder = (props) => {
  const [ingreadient, setIngredient] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });
  const [price, setPrice] = useState({
    salad: 0.5,
    bacon: 0.4,
    cheese: 0.7,
    meat: 1.2,
    totalPrice: 4,
  });
  const [purchasable, setPurchasable] = useState(false);
  const updatePurchasable = (ingreadient) => {
    const ingreadients = { ...ingreadient };
    const sum = Object.keys(ingreadients)
      .map((igkey) => {
        return ingreadients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    setPurchasable(sum > 0);
  };
  const addIngreadientHandler = (type) => {
    const oldCount = ingreadient[type];
    const updatedCount = oldCount + 1;
    const updatedIngreadients = { ...ingreadient };
    updatedIngreadients[type] = updatedCount;
    const priceAdditon = price[type];
    const oldPrice = price.totalPrice;
    const newPrice = { ...price };
    newPrice["totalPrice"] = oldPrice + priceAdditon;
    setIngredient(updatedIngreadients);
    setPrice(newPrice);
    updatePurchasable(updatedIngreadients);
  };
  const removeIngreadientHandler = (type) => {
    const oldCount = ingreadient[type];
    if (oldCount === 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngreadients = { ...ingreadient };
    updatedIngreadients[type] = updatedCount;
    const priceDeletion = price[type];
    const oldPrice = price.totalPrice;
    const newPrice = { ...price };
    newPrice["totalPrice"] = oldPrice - priceDeletion;
    setIngredient(updatedIngreadients);
    setPrice(newPrice);
    updatePurchasable(updatedIngreadients);
  };
  let disableInfo = { ...ingreadient };
  for (let key in disableInfo) {
    disableInfo[key] = disableInfo[key] <= 0;
  }
  return (
    <Aux>
      <Burger ingreadient={ingreadient} />
      <Buildcontrols
        ingreadientAdded={addIngreadientHandler}
        ingreadientDeleted={removeIngreadientHandler}
        disabled={disableInfo}
        totalPrice={price.totalPrice}
        purchasable={purchasable}
      />
    </Aux>
  );
};
export default BurgerBuilder;
