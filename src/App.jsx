import "./styles/styles.scss";
import "./styles/styles-responsive.scss";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/hero/MainComponent";
import SubContent from "./components/subContent/SubContent";
import Attribution from "./components/attribution/Attribution";
import Menu from "./components/menus/Menu";

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <MainComponent />
      <SubContent />
      <Attribution />
    </BrowserRouter>
  );
};

export default App;
