import React from 'react'
import Slider from 'react-slick';
import { Image } from 'antd';

const SlideComponent = ({arrSlide}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,        
        autoplaySpeed: 2000,
      };
  return (
    <Slider {...settings}>
        {arrSlide.map((image, index) =>{
            return (
                <Image key={index} src={image} alt="slide" preview={false} width="100%"/>
            )
        })}
    </Slider>
  )
}

export default SlideComponent