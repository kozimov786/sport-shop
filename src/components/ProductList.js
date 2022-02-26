import React from 'react'
import styled from 'styled-components'
import Review from './Review'
import { IoMdCart } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'


export default function ProductList({ item }) {
  return (
    <List>
      <Item>
        <img src={item.url} alt="nike" width={300} height={272} />
        <Info>
          <h2>{item.name}</h2>
          <div className='reviews'>
            <Review />
            <p><span>0 </span>reviews</p>
            <a href='/'>Submit a review</a>
          </div>
          <div className='price'>
            <span className="cost">$299,43</span>
            <span className="old-cost">$523,2</span>
            <span className='sale-cost'>24% Off</span>
          </div>
          <p className="decr">
            Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...
          </p>
          <div className='actions'>
            <button>
              <IoMdCart size={18} color='#33A0FF' />
              <span>Add to Cart</span>
            </button>
            <button>
              <AiOutlineHeart size={18} color='#33A0FF' />
            </button>
          </div>
        </Info>
      </Item>
    </List>
  )
}

const List = styled.div`
  display: flex;
  flex-direction: column;
`
const Item = styled.div`
  display: flex;
  padding-bottom: 30px;
  margin-bottom: 26px;
   border-bottom: 2px solid #F6F7F8;
`
const Info = styled.div`
 margin-left: 15px;
 h2{
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 15px;
 }
 .reviews{
   display: flex;
   align-items: center;
   font-size: 14px;
    line-height: 17px;
    font-family: var(--Nova);
    font-weight: normal;
    padding-bottom: 17px;
    border-bottom: 2px solid #F6F7F8;
   p{
     margin: 0;
     margin-left: 16px;
     margin-right: 13px;

    color: #C1C8CE;
   }
   a{
     color: #33A0FF;
   }
 }
 .price{
   margin-top: 25px;
   margin-bottom: 15px;
 }
 .decr{
  font-weight: normal;
font-size: 14px;
line-height: 21px;
color: var(--light-black);
 }
 .actions{
   display: flex;
   align-items: center;
   font-family: var(--Nova);
   button{
     border: none;
     cursor: pointer;
     margin-right: 12px;
     padding: 13px 26px;
     display: flex;
     align-items: center;
     color: var(--blue);
     background-color: rgba(51, 160, 255, 0.1);
   }
   span{
     margin-left: 12px;
   }
 }
`