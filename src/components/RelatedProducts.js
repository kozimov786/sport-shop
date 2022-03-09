import React from 'react'
import styled from 'styled-components';
import Product from './Products/Product';

export default function RelatedProducts() {
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
      <h3 className='heading'>Related Products</h3>
      <div className='related'>
        {PRODUCTS.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin-bottom: 86px;
.heading{
  text-align: center;
  margin-bottom: 83px;
}
.related{
  display: flex;
  justify-content: space-between;
}
`