import React from 'react'
import styled from 'styled-components';

import Path from './Path';


import adidasImg from '../image/card-yellow.shoe.png';
import backImg from '../image/card-yellow-show-back.png'
import Carousel from './Carousel';
import ProductInfo from './ProductInfo';
import ProductTabs from './ProductTabs';
import RelatedProducts from './RelatedProducts';

export default function Detail({ PRODUCTS }) {

  return (
    <Wrapper>
      <div className="container">
        <Path />
        <Content>
          <ProductDetail>
            <div className='flex'>
              <Gallery>
                <img className='main__img' src={adidasImg} alt="" />
                <div>
                  <img className='thumb__img' src={backImg} alt="" />
                  <img className='thumb__img' src={backImg} alt="" />
                  <img className='thumb__img' src={backImg} alt="" />
                  <img className='thumb__img' src={backImg} alt="" />
                </div>
              </Gallery>
              <Info>
                <ProductInfo PRODUCTS={PRODUCTS} />
              </Info>
            </div>
            <DetailTabs>
              <ProductTabs />
            </DetailTabs>
          </ProductDetail>
          <BestSeller>
            <Carousel />
          </BestSeller>
        </Content>
        <RelatedProducts />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`
const Content = styled.div`
 display: flex;
`

const Info = styled.div`
margin-left: 53px;
width: 500px;
`

const ProductDetail = styled.div`
 width: 925px;
 .flex{
  display: flex;
 }

`
const BestSeller = styled.div`
  margin-left: auto;
`
const DetailTabs = styled.div`

`

const Gallery = styled.div`
display: flex;
flex-direction: column;
max-width: 388px;
.main__img{
   width: 375px;
   height: 271px;
   margin-bottom: 130px;
 }
 div{
   display: flex;
   align-items: center;
   .thumb__img{
     width: 85px;
     margin: 0 5px;
     height: 85px;

   }
 }

`
