import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from '@mui/material/IconButton';
import logo from "./imgs/logo.jpg";
import ForumIcon from '@mui/icons-material/Forum';

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <IconButton>
      <PersonIcon fontSize="large" className="header__icon" />
      </IconButton> 
      {/* <h1>Header</h1> */}
      <img src={logo} className="header__logo" alt="" />
      <IconButton>
      <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
