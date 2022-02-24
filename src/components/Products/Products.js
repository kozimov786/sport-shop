import React from 'react'
import styled from 'styled-components';
import Product from './Product';

export default function Products() {
  const PRODUCTS = [
    {
      id: 1,
      name: "Nike Sneakers",
      url: require("../../image/bag-yellow.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 2,
      name: "Nike Sneakers",
      url: require("../../image/nike-sneaker.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 3,
      name: "Nike Sneakers",
      url: require("../../image/card-yellow-show-back.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 4,
      name: "Nike Sneakers",
      url: require("../../image/card-yellow.shoe.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 5,
      name: "Nike Sneakers",
      url: require("../../image/sneaker-blue.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 6,
      name: "Nike Sneakers",
      url: require("../../image/nike-sneaker.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 7,
      name: "Nike Sneakers",
      url: require("../../image/sneaker-blue.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 8,
      name: "Nike Sneakers",
      url: require("../../image/card-yellow.shoe.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
  ]

  return (
    <ProductList>
      <div className="container">
        <h2 className='heading'>BEST SELLER</h2>
        <ProductMenu>
          <li>
            <button className='active__tab'>All</button>
          </li>
          <li>
            <button>Bags</button>
          </li>
          <li>
            <button>Sneakers</button>
          </li>
          <li>
            <button>Belt</button>
          </li>
          <li>
            <button>Sunglasses</button>
          </li>
        </ProductMenu>
        <div className='cards'>
          {PRODUCTS.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      </div>
      <button className="card__btn-more">LOAD MORE</button>
    </ProductList>
  )
}

const ProductList = styled.div`
  padding-top: 63px;
  padding-bottom: 90px;
  .card__btn-more{
  border: none;
  background-color: transparent;
  width: 115px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  white-space: nowrap;
    color: var(--blue);
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    border-bottom: 2px solid var(--blue);
  }
  h2{
    text-align: center;
    margin-bottom: 26px;
  }
  .cards{
    display: grid;
  padding-bottom: 20px;
  grid-template-columns: repeat(4,1fr);
  gap: 34px 16px;
  }

`
const ProductMenu = styled.ul`
  width: 627px;
  margin: 0 auto 23px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  .active__tab{
    color: var(--blue);
    border-bottom: 2px solid var(--blue);
  }
  button{
    border: none;
    background-color: transparent;
    font-weight: normal;
    font-size: 22px;
    line-height: 33px;
    color: var(--light-black);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
    color: var(--blue);
    }
  }

`
