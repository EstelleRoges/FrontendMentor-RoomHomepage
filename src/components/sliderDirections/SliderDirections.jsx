import React from "react";

const SliderDirections = (props) => {
  let {index, newIndex} = props;

  const slide = (direction) => {
    if(direction ==="previous") {
      index === 0 ? newIndex(2) : newIndex(index-1); 
    }
    if(direction === "next") {
      index === 2 ? newIndex(0) : newIndex(index+1); 
    }
  }

  return (
    <>
      <div className="sliderDirections">
        <button aria-label="previous" id="previous" onClick={() => {slide("previous")}}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13 0L1 12l12 12"
              stroke="#FFF"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <button aria-label="next" id="next" onClick={() => {slide("next")}}>
          <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 0l12 12L1 24"
              stroke="#FFF"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SliderDirections;
