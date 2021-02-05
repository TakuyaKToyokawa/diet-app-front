import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import List from "../components/List";
import FoodInfo from "../components/FoodInfo";
import '../App.scss';

const FoodSearchPage = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="main">
            <Header />
            <div className="search">
                <SearchBar />
            </div>

            <div className="info">
                <FoodInfo />
            </div>

            <div className="dropdown">
                <div className="ddmenu">
                    <Dropdown category="Dairy" />
                    <div className="food">
                        <List expanded={expanded}/>
                    </div>
                    <div className="food">
                        <List text="Cheese" number="120" />
                    </div>
                    <div className="food">
                        <List text="Milk" number="193" />
                    </div>
                </div>
                <div className="ddmenu">
                    <Dropdown category="Meat" />
                </div>
                <div className="ddmenu">
                    <Dropdown category="Vegetables" />
                </div>
            </div>

            <div className="nav">
                <Footer />
            </div>
        </div>
    );
};

export default FoodSearchPage;
