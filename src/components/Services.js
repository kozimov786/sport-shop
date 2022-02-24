import React from 'react'
import styled from 'styled-components';

import ShippingImg from '../image/shipping.png';
import RefundImg from '../image/refund.png';
import SupportImg from '../image/support.png';

export default function Services() {
  return (
    <Wrapper>
      <div className="container">
        <ServiceList>
          <li>
            <img src={ShippingImg} alt="shipping icon" />
            <h3>FREE SHIPPING</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting   industry.
            </p>
          </li>
          <li>
            <img src={RefundImg} alt="shipping icon" />
            <h3>100% REFUND</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting   industry.
            </p>
          </li>
          <li>
            <img src={SupportImg} alt="shipping icon" />
            <h3>SUPPORT 24/7</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting   industry.
            </p>
          </li>
        </ServiceList>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 padding-top: 97px;
 padding-bottom: 60px;
`
const ServiceList = styled.ul`
 display: flex;
 justify-content: space-between;
 text-align: center;
 li{
   width: 288px;
 }
 img{
   margin: 0 auto 43px;
 }
 h3{
  font-weight: 500;
font-size: 27px;
line-height: 40px;
color: var(--title-grey);
margin-bottom: 5px;
 }
 p{
   margin-bottom: 0;
   font-family: var(--Nova);
color: var(--title-grey);

 }
`