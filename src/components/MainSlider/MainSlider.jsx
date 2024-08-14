import React from 'react'
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import img1 from "../../assets/imgs/12518e86-9379-4605-b26c-37241ff84dc4.avif"
import img2 from "../../assets/imgs/80986018-eadd-499f-9d99-be18df80a4e8.avif"
import img3 from "../../assets/imgs/a92443db-1170-4ab9-92ca-7d204c972416.avif"


export default function MainSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#ee701d", height:"30px", width:"30px", padding:"5px", marginRight:"25px", color:"white" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#ee701d", height:"30px", width:"30px", padding:"5px", marginLeft:"25px", zIndex:"99", color:"white" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };
  return (
    <>
  <div className="container sliderCont">
  <Slider {...settings}>
      <img className='d-inline-block' src={img1} width={"90%"} alt="" />
      <img className="d-inline-block" src={img2} width={"90%"} alt="" />
      <img className='d-inline-block' src={img3} width={"90%"} alt="" />

    </Slider>
  </div>
    </>
  )
}
