import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from '../components/Dropdown';
import Confirmation from '../components/Confirmation';
import List from '../components/List';
import Header from '../components/Header';

const Main = () => {
  return (
    <div className="main">
      <Dropdown></Dropdown>
      <Confirmation> </Confirmation>
      <List></List>
      <Header></Header>
    </div>
  );
};

export default Main;
