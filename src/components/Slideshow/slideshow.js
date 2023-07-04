import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Slideshow/slideshow.css";
import Promotions from "../Slideshow/promotions.json";

const Slideshow = () => {
  const settings = {
    dots: true,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScrool: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider className="slider-container" {...settings}>
      {Promotions.promotions.map((promotion) => (
        <div className="slide-title" key={promotion.title}>
          <h3>{promotion.title}</h3>
          <div className="image-container" key={promotion.title}>
            <img src={promotion.image} alt={promotion.title} width={450} />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Slideshow;
