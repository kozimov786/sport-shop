import React from 'react'
import styled from 'styled-components'

export default function Search() {
  return (
    <Wrapper>
      <form action="https://htmlacademy.ru">
        <input type="text" placeholder='Search query...' required />
        <button type='submit'>Search</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding-top: 60px;
padding-bottom: 95px;
 form{
   width: 635px;
   margin: 0 auto;
   display: flex;
   input{
     border: none;
     border: 2px solid #BCDDFE;
     background-color: #fff;
     padding: 22px;
     flex: 1;
   }
   button{
  padding: 13px 23px;
  border: none;
  font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    background-color: #40BFFF;
    border: 2px solid #40BFFF;
   }
 }
`