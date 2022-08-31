import React from "react";
import {NavLink} from "react-router-dom";

const Attribution = () => {
  return (
    <>
      <div className="attribution">
        Challenge by{" "}
        <NavLink to="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </NavLink>
        . Coded by <NavLink to="https://www.frontendmentor.io/solutions/room-home-page-react-sass-LNKrWXgKkK">EstelleR</NavLink>.
      </div>
    </>
  );
};

export default Attribution;
