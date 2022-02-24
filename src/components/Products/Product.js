import React from 'react'
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi'

import StarFull from '../../image/star-yellow.png';
import StarNone from '../../image/star-gray.png';

export default function Product({ item }) {


  return (
    <Card>
      <img src={item.url} alt="sneaker" />
      <div className="card__info">
        <a className='card__link' href="/">
          <h3 className='card__title'>{item.name}</h3>
        </a>
        <div className='card__review'>
          <img src={StarFull} alt="start" />
          <img src={StarFull} alt="start" />
          <img src={StarFull} alt="start" />
          <img src={StarFull} alt="start" />
          <img src={StarNone} alt="start" />
        </div>
        <div className='card__price'>
          <span className='cost'>$ {item.cost}</span>
          <span className='old-cost'>$ {item.oldCost}</span>
          <span className="sale-cost">{item.sale}% Off</span>
        </div>

      </div>
      <div className='card__overlay'>
        <a href="/">
          <AiOutlineHeart color='#33A0FF' size={20} />
        </a>
        <a href="/">
          <HiOutlineShoppingCart color='#33A0FF' size={20} />
        </a>
      </div>
    </Card>
  )
}


const Card = styled.div`
 max-width: 301px;
 border: 2px solid #F0F0F0;
 display: inline-block;
 background-color: #F0F0F0;
 text-align: center;
 overflow: hidden;
 border-radius: 10px;
 .card__overlay{
   width: 280px;
   position: absolute;
   top: 38px;
   left: 10px;
   height: 200px;
   background-color: rgba(255, 255, 255, 0.95);
   a{
     margin: 0 5px;
     width: 51px;
     height: 51px;
     border: 2px solid rgba(51, 160, 255, 0.25);
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
    }
    display: none;
 }

 .card__link:hover + .card__overlay{

  display: flex;
}



 img{
   object-fit: fill;
 }
 .card__info{
   background-color: #fff;
   padding: 16px 40px;
 }
 .card__review{
   display: flex;
   align-items: center;
   justify-content: center;
   img:not(:last-child){
     margin-right: 13px;
   }
 }
`