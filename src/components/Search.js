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
   max-width: 675px;
   padding-left: 20px;
   padding-right: 20px;
   margin: 0 auto;
   display: flex;
   input{
     border: none;
     border: 2px solid #BCDDFE;
     border-right-color:#40BFFF ;
     background-color: #fff;
     padding: 22px;
     flex: 1;
   }
   button{
  padding: 17px 27px;
  border: none;
  font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    background-color: #40BFFF;
   }
 }
`