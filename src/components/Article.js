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
   top: -260px;
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
`
