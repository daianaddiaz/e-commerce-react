import { createContext, useState, useEffect } from "react";
import axios from "axios";
import React from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [datos, setData] = useState([]);
  const [cart, setCart] = useState([]);
  
useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);


  return <dataContext.Provider value={{ datos, cart, setCart }}>{children}</dataContext.Provider>;
};

export default DataProvider;