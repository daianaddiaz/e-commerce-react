import { useContext } from "react";
import { dataContext } from "../Context/DataContext";


import React from 'react'

const CartTotal = () => {
  const {cart} = useContext(dataContext);

  const total = cart.reduce((acc,el) => acc + el.price, 0);

  return <div className="cartTotal">
    <h3>Total a Pagar: {total} </h3>
  </div>

};
export default CartTotal
