import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
    return (
    <main>
        <Navbar/>
        <Banner/>
        <div className="card-container">
        <Products/>
        </div>
    </main>
    );
};

export default Home;