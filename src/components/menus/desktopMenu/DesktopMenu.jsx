import React from "react";
import {NavLink} from "react-router-dom";

const DesktopMenu = () => {
  return (
    <>
      <header className="header">
        <img src="./images/logo.svg" alt="roomLogo" />
        <nav>
          <ul>
            <li>
              <NavLink to="#">home</NavLink>
            </li>
            <li>
              <NavLink to="#">shop</NavLink>
            </li>
            <li>
              <NavLink to="#">about</NavLink>
            </li>
            <li>
              <NavLink to="#">contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default DesktopMenu;
