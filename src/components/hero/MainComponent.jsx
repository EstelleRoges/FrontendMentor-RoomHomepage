// import Slide from "../slides/Slide";
// import slides from "../slides/slides";
import FirstSlide from "../slides/FirstSlide";
import SecondSlide from "../slides/SecondSlide";
import ThirdSlide from "../slides/ThirdSlide";
import { useState } from "react";
// import SliderDirections from "../sliderDirections/SliderDirections";

const MainComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slidesArr = [
    <FirstSlide current={currentSlide} setCurrent={setCurrentSlide}/>,
    <SecondSlide current={currentSlide} setCurrent={setCurrentSlide}/>,
    <ThirdSlide current={currentSlide} setCurrent={setCurrentSlide}/>,
  ];

  return (
    <>
      <main id="sliderComponent">{slidesArr[currentSlide]}</main>
    </>
  );
};

export default MainComponent;
