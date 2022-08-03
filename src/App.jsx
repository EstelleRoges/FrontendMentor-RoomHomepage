import "./styles/styles.scss";
import "./styles/styles-responsive.scss";
import { BrowserRouter } from "react-router-dom";
import MobileMenu from "./components/menus/mobileMenu/MobileMenu";
import DesktopMenu from "./components/menus/desktopMenu/DesktopMenu";
import MainComponent from "./components/hero/MainComponent";
import SubContent from "./components/subContent/SubContent";
import Attribution from "./components/attribution/Attribution";
import { useEffect, useState } from "react";

const App = () => {
  const [navType, setNavType] = useState(<DesktopMenu />);

  useEffect(() => {
    const changeNav = () => {
      if (window.innerWidth <= 992) {
        setNavType(<MobileMenu />);
      } else {
        setNavType(<DesktopMenu />);
      }
    };
    window.addEventListener("resize", changeNav);
  }, []);

  return (
    <BrowserRouter>
      {navType}
      <MainComponent />
      <SubContent />
      <Attribution />
    </BrowserRouter>
  );
};

export default App;
