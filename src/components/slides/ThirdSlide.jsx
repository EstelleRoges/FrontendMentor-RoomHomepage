import SliderDirections from "../sliderDirections/SliderDirections";
import ShopButton from "../shopButton/ShopButton";

const ThirdSlide = (props) => {
  return (
    <>
    <section id="thirdSlide" className="slide">
          <aside>
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="./images/mobile-image-hero-3.jpg"
              />
              <img src="./images/desktop-image-hero-3.jpg" alt="thirdSlideImg" />
            </picture>
            <SliderDirections index={props.current} newIndex={props.setCurrent}/>
          </aside>
          <article>
            <h1>Manufactured with the best materials</h1>
            <p>
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
            </p>
            <ShopButton />
          </article>
        </section>
    </>
  )
}

export default ThirdSlide;