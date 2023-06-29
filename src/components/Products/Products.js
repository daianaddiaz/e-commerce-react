
import { dataContext } from "../Context/DataContext"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import React from "react";

import "./Products.css";

const Products = () => {
  const { datos, cart, setCart } = useContext(dataContext);
  
const buyProduct = (product) => {
    console.log(product);
    setCart([...cart, product]);
  };

  return datos.map((product) => {
  return (
    <div className="card" key={product.id}>
      <img src={product.img} alt='img-product-card'/>
      <h3>{product.name}</h3>
      <h4>{product.price}$</h4>
      <button onClick={() => buyProduct(product)}>Comprar</button>
    </div>
  );
});
};
export default Products;

