import React from 'react'
import styled from 'styled-components'
import Path from '../components/Path'
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

export default function HotDeal({ PRODUCTS }) {
  return (
    <Wrapper>
      <Path />
      <div className='container deal__container'>
        <Sidebar />
        <MainContent PRODUCTS={PRODUCTS} />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .deal__container{
    display: flex;
  justify-content: space-between;
  }
  @media screen and (max-width:1090px) {
    .deal__container{
      flex-direction:column;
      justify-content: center;
      align-items: center;
    }
  }
`