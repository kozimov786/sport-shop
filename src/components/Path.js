import React from 'react'
import styled from 'styled-components'

export default function Path() {
  return (
    <Wrapper>
      <p>Home</p>
      <span>Hot Deal</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  margin-bottom: 50px;
  padding-bottom: 15px;
  font-family: var(--Nova);
  background-color: #FBFBFC;
  p{
    margin-bottom: 0;
    color: #33A0FF;
    margin-right: 8px;
  }
  span{
    color: var(--light-black);
    margin-right: 8px;
    &::before {
      content: '/';
      margin-right: 9px;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #C1C8CE;
    }
  }
`
