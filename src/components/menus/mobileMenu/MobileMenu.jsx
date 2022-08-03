import { useState } from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const [mode, setMode] = useState(false);

  const changeMode = () => {
    setMode(!mode);
  };

  const closeMenu = () => {
    setMode(false);
  };

  return (
    <>
      <header className={mode ? "mobileHeader active" : "mobileHeader"}>
        <div className="blackBcg">
          <section className="logoMenu">
            <i
              className={mode ? "fa fa-close" : "fa fa-bars"}
              onClick={changeMode}
            ></i>
            <img src="./images/logo.svg" alt="roomLogo" />
          </section>
          <nav>
            <ul>
              <li>
                <NavLink to="#" onClick={closeMenu}>
                  home
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={closeMenu}>
                  shop
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={closeMenu}>
                  about
                </NavLink>
              </li>
              <li>
                <NavLink to="#" onClick={closeMenu}>
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MobileMenu;
