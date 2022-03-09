import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import Product from './Products/Product'

export default function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const PRODUCTS = [
    {
      id: 1,
      name: "Nike Sneakers",
      url: require("../image/bag-yellow.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 2,
      name: "Nike Sneakers",
      url: require("../image/nike-sneaker.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 3,
      name: "Nike Sneakers",
      url: require("../image/card-yellow-show-back.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 4,
      name: "Nike Sneakers",
      url: require("../image/card-yellow.shoe.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
  ];
  return (
    <Wrapper>
      <h3>BEST SELLER</h3>
      <Slider {...settings}>
        {PRODUCTS.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </Slider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 301px;
margin-left: auto;
h3{
  font-weight: normal;
font-size: 18px;
line-height: 22px;
font-family: var(--Nova);
margin-bottom: 34px;
color: #C1C8CE
}
.slick-dots {
  li{

    margin-right: 12px;
  }
  button {
			display: block;
			width: 31px;
			height: 3px;
			padding: 0;
			border: none;
			background-color: #F1F3F4;
			text-indent: -9999px;
		}
}
		li.slick-active button {
			background-color: #33A0FF;
		}


`