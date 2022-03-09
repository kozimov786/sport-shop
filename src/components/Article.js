import React from 'react'
import styled from 'styled-components'

import adidasImg from '../image/adidas-shoe.png'

export default function Article() {
  return (
    <Wrapper>
      <div className="container article__container">
        <div className='article__info'>
          <h2>Adidas Men Running Sneakers</h2>
          <p>Performance and design. Taken right to the edge.</p>
          <a href='/'>SHOP NOW</a>
        </div>
        <img className='article__img' src={adidasImg} alt="adidas" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 background-color: var(--blue);


 .article__container{
   display: flex;
   align-items: center;
   position: relative;
   padding-top: 162px;
   padding-bottom: 162px;
 }

 .article__img{
   position: absolute;
   top: -60px;
   right: -80px;
 }

 .article__info{
width: 592px;
color: #fff;
 h2{
  font-weight: 500;
font-size: 55px;
margin-bottom: 23px;
line-height: 82px;
z-index: 2;
 }
 p{
  font-weight: normal;
font-size: 24px;
line-height: 36px;
margin-bottom: 12px;
 }
 a{
  font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #fff;
  &::after{
    content: '';
    width: 75px;
    height: 2px;
    background-color: #fff;
    display: block;
  }
  &:hover::after{
    width: 110px;
transition: all .3s ease-in;

  }
 }
 }

 @media screen and (max-width:1385px) {
   .article__img{
     width: 600px;
     right: 0;
     z-index: 0;
   }
 }
 @media screen and (max-width:1100px) {
   .article__info{
     width: 490px;
   }
   .article__img{
    top: 0;
   }
 }
 @media screen and (max-width:800px) {
   .article__info{
     width: 100% !important;
     margin-top: 450px;

   }
   .article__img{
     width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
   }
 }
 @media screen and (max-width:700px) {
   .article__info{
     margin-top: 350px;

   }
 }
 @media screen and (max-width:600px) {
   .article__info{
     margin-top: 250px;

   }
 }
 @media screen and (max-width:500px) {
   .article__info{
     margin-top: 150px;
     h2{
       font-size: 38px;
     }
   }
 }
 @media screen and (max-width:400px) {
   .article__container{
    padding-bottom: 20px;
   }
   .article__info{
     margin-top: 100px;

   }
 }
`
