import SliderDirections from "../sliderDirections/SliderDirections";
import ShopButton from "../shopButton/ShopButton";

const Slide = (props) => {
  return (
     <>
      <section className="slide">
        <aside>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={props.imgMobile}
            />
            <img src={props.imgDesktop} alt="slideImg" />
          </picture>
        </aside>
        <article>
          <h1>{props.title}</h1>
          <p>
            {props.text}
          </p>
          <ShopButton />
        </article>
      </section>
    </>
  )
}

export default Slide