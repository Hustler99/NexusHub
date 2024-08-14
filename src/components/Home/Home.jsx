import React, { Fragment } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from '../MainSlider/MainSlider';
import Product from '../Product/Product';

export default function Home() {
  return (
    <Fragment>
      <MainSlider/>
      <Product/>
    </Fragment>
  )
}
