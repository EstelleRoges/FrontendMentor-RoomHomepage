import SliderDirections from "../sliderDirections/SliderDirections";
import ShopButton from "../shopButton/ShopButton";

const SecondSlide = (props) => {
  return (
    <>
      <section id="secondSlide" className="slide">
        <aside>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="./images/mobile-image-hero-2.jpg"
            />
            <img src="./images/desktop-image-hero-2.jpg" alt="secondSlideImg" />
          </picture>
          <SliderDirections index={props.current} newIndex={props.setCurrent}/>
        </aside>
        <article>
          <h1>We are available all across the globe</h1>
          <p>
            With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we’re in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.
          </p>
          <ShopButton />
        </article>
      </section>
    </>
  );
};

export default SecondSlide;
