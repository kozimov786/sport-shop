import React from 'react'
import styled from 'styled-components';

import CardBagImg from '../image/available-bag.png';
import CardSneakRedImg from '../image/available-sneaker-red.png';
import CardSneakYellowImg from '../image/available-sneaker-yellow.png';


export default function AvailableProduct() {
  return (
    <Content>
      <div className='container available__container'>
        <div className='available__card'>
          <img className='available__card-img' src={CardBagImg} alt="bag" width={418} height={358} />
          <h2 className='available__card-title'>FS - QUILTED MAXI CROSS BAG</h2>
          <div className='available__bag-info'>
            <span className='old-cost'>$534,33</span>
            <span className='sale-cost'>24% Off</span>
          </div>
          <span className='cost available-cost'>$299,43</span>
        </div>
        <div className='available__card'>
          <img src={CardSneakRedImg} alt="bag" width={418} height={358} />
          <h2 className='available__card-title'>FS - Nike Air Max 270 React...</h2>
          <div className='available__red-info'>
            <span className='old-cost'>$534,33</span>
            <span className='sale-cost'>24% Off</span>
          </div>
          <span className='cost available-cost available-cost__middle'>$299,43</span>
        </div>
        <div className='available__card'>
          <img src={CardSneakYellowImg} alt="bag" width={418} height={358} />
          <h2 className='available__card-title'>FS - Nike Air Max 270 React...</h2>
          <div className='available__yellow-info'>
            <span className='old-cost'>$534,33</span>
            <span className='sale-cost'>24% Off</span>
          </div>
          <span className='cost available-cost'>$299,43</span>
        </div>
      </div>
    </Content>
  )
}

const Content = styled.div`
margin-top: -100px;
width: 100%;
 .available__container{
   display: flex;

 }
 .available__card{
   width: 100%;
   background-color: #F6F6F6;
   position: relative;
 }

 .available__card-title{
  max-width: 202px;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  color: var(--title-grey-color);
  letter-spacing: 0.5px;
  z-index: 1;
  position: absolute;
   top: 25px;
   left: 50px;
   z-index: 0;
 }
 .available__bag-info{
   position: absolute;
   top: 272px;
   left: 52px;
 }
 .available__red-info{
  position: absolute;
   top: 308px;
   left: 145px;
 }
 .available__yellow-info{
  position: absolute;
   top: 112px;
   left: 52px;
 }
 .available-cost{
  font-size: 30px;
  position: absolute;
  top: 288px;
  font-family: var(--Raleway);
  right: 33px;
 }
 .available-cost__middle{
   top: 20px;
   right: 35px;
 }
 img{
   width: 100%;
   height: 100%;
 }
 @media screen and (max-width:1200px){
 .available__red-info{
   top: 268px;
 }

 .available-cost{
  top: 268px;
 }
 .available-cost__middle{
   top: 40px;
   right: 5px;
 }
 }
 @media screen and (max-width:1114px){
  .available__card-title{
   top: 25px;
   left: 50px;
   z-index: 0;
 }
 .available__bag-info{
   top: 222px;
   left: 52px;
 }
 .available__red-info{
   top: 228px;
   left: 145px;
 }
 .available__yellow-info{
   top: 112px;
   left: 52px;
 }
 .available-cost{
  top: 218px;
  right: 13px;
 }
 .available-cost__middle{
   top: 40px;
   right: 5px;
 }
 }
 @media screen and (max-width:1000px){
   .available__container{
     flex-direction: column;
   }
   .available__card-title{
   top: 25px;
   left: 50px;
   z-index: 0;
 }
 .available__bag-info{
   top: 128px;
   left: 50px;
 }
 .available__red-info{
   top: 128px;
   left: 50px;
 }
 .available__yellow-info{
   top: 112px;
   left: 52px;
 }
 .available-cost{
  top: 58px;
  right: 50px;
 }
 .available-cost__middle{
   top: 50px;
   right: 50px;
 }
 }
 @media screen and (max-width:640px){

 .available__bag-info{
   top: 78px;
   left: 50px;
 }
 .available__red-info{
   top: 128px;
   left: 50px;
 }
 .available__yellow-info{
   top: 112px;
   left: 52px;
 }
 .available-cost{
  top: 58px;
  right: 50px;
 }
 .available-cost__middle{
   top: 50px;
   right: 50px;
 }
 }

`