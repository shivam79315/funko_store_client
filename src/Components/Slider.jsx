import React from 'react';
import Slider from 'react-slick';
import '../../assets/plugins/slick/slick.css';
import '../../assets/plugins/slick/slick-theme.css';
import Background1 from "../assets/images/Funko/Funko-banner/Background1.jpg";

const SliderComponent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...sliderSettings}>
      <div className="slider-item th-fullpage hero-area" style={{ backgroundImage: `url(${Background1})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-center">
              <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">DREAMY EXCLUSIVES</p>
              <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">GET YOUR SLEEP! </h1>
              <p> A Celebration is at Hand! Commemorate the 65th Anniversary of Disney's Sleeping Beauty with Funko & Loungefly Gear.
                <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn" href="#">Shop Collection</a>
              </p>
            </div>
            <div className="col-lg-8 banner-img-1">
              {/* Your content for the right side of the slider */}
            </div>
          </div>
        </div>
      </div>
      
      <div className="slider-item th-fullpage hero-area" style={{ backgroundImage: `url(${Background1})` }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-center">
              <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">DREAMY EXCLUSIVES</p>
              <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">GET YOUR SLEEP! </h1>
              <p> A Celebration is at Hand! Commemorate the 65th Anniversary of Disney's Sleeping Beauty with Funko & Loungefly Gear.
                <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn" href="#">Shop Collection</a>
              </p>
            </div>
            <div className="col-lg-8 banner-img-1">
              {/* Your content for the right side of the slider */}
            </div>
          </div>
        </div>
      </div>
      {/* Add more slider items as needed */}
    </Slider>
  );
}

export default SliderComponent;
