import SliderDirections from "../sliderDirections/SliderDirections";
import ShopButton from "../shopButton/ShopButton";

const FirstSlide = (props) => {
  return (
    <>
      <section id="firstSlide" className="slide">
        <aside>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="./images/mobile-image-hero-1.jpg"
            />
            <img src="./images/desktop-image-hero-1.jpg" alt="firstSlideImg" />
          </picture>
          <SliderDirections index={props.current} newIndex={props.setCurrent}/>
        </aside>
        <article>
          <h1>Discover innovative ways to decorate</h1>
          <p>
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
          <ShopButton />
        </article>
      </section>
    </>
  );
};

export default FirstSlide;
