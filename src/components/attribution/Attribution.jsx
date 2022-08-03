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
        . Coded by <NavLink to="#">Teru-san</NavLink>.
      </div>
    </>
  );
};

export default Attribution;
