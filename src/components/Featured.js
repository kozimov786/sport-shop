import React from 'react'
import styled from 'styled-components'

import featuredImg from '../image/featured-img.png';
import Review from './Review';



export default function Featured() {
  return (
    <Wrapper>
      <div className="container">
        <h2 className='heading featured__heading'>Featured Products</h2>
        <FeaturedList>
          <FeaturedItem>
            <img src={featuredImg} alt="feature shoe" />
            <Info>
              <h3>Blue Swade Nike Sneakers</h3>
              <Review />
              <p>
                <span className='cost featured__cost'>$499</span>
                <span className='old-cost'>$499</span>
              </p>
            </Info>
          </FeaturedItem>
          <FeaturedItem>
            <img src={featuredImg} alt="feature shoe" />
            <Info>
              <h3>Blue Swade Nike Sneakers</h3>
              <Review />
              <p>
                <span className='cost featured__cost'>$499</span>
                <span className='old-cost'>$499</span>
              </p>
            </Info>
          </FeaturedItem>
          <FeaturedItem>
            <img src={featuredImg} alt="feature shoe" />
            <Info>
              <h3>Blue Swade Nike Sneakers</h3>
              <Review />
              <p>
                <span className='cost featured__cost'>$499</span>
                <span className='old-cost'>$499</span>
              </p>
            </Info>
          </FeaturedItem>
        </FeaturedList>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 padding-top: 50px;
 padding-bottom: 50px;
 .featured__heading{
   text-align: center;
   margin-bottom: 55px;
 }
`

const FeaturedList = styled.ul`
  display: flex;
  justify-content: space-between;
`
const FeaturedItem = styled.ul`
  display: flex;

`

const Info = styled.div`
width: 249px;
margin-left: 25px;
h3{
    font-weight: normal;
font-size: 22px;
line-height: 27px;
font-family: var(--Nova);
color: var(--light-black);
margin-bottom: 16px;
  }
  p{
    margin-bottom: 0;
    margin-top: 16px;
  }
  .featured__cost{
    color: var(--primary-red);
  }
`