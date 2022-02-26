import React from 'react'
import styled from 'styled-components'
import Path from '../components/Path'
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

export default function HotDeal() {
  return (
    <Wrapper>
      <Path />
      <div className='container deal__container'>
        <Sidebar />
        <MainContent />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .deal__container{
    display: flex;
  justify-content: space-between;
  }
`