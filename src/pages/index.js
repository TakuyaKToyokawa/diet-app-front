import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from '../components/Dropdown';

const Main = () => {
  return (
    <div className="main">
      <Dropdown></Dropdown>
    </div>
  );
};

export default Main;
