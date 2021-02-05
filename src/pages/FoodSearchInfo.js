import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FoodInfo from "../components/FoodInfo";
import '../App.scss';

const FoodSearchInfo = () => {
    return (
        <div className="main1">
            <Header />
            <div>
                <FoodInfo />
            </div>
            <div>
                <Footer className="nav" />
            </div>
        </div>
    );
};

export default FoodSearchInfo;
