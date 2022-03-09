import React from 'react'
import styled from 'styled-components'
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { FaRegUser } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Topbar() {
  const itemsQuantity = useSelector(state => state.ui.cartItems)


  return (
    <Content>
      <div className="container topbar__container">
        <LeftSide>
          <div className='left__action'>
            <span>EN</span>
            <AiFillCaretDown size={10} />
          </div>
          <div className='left__action'>
            <span>USD</span>
            <AiFillCaretDown size={10} />
          </div>
        </LeftSide>

        <RighSide>
          <div className='topbar__profile'>
            <FaRegUser size={20} />
            <span>My Profile</span>
          </div>
          <Link to='/cart'>
            <div className='topbar__card'>
              <FiShoppingCart size={20} />
              <span className='topbar__card--badge'>{itemsQuantity && itemsQuantity.length}</span>
            </div>
          </Link>
          <p className='topbar__items'>Items</p>
          <p className='topbar__cost'>$0.00</p>
          <button className='topbar__search'>
            <AiOutlineSearch size={20} />
          </button>
        </RighSide>
      </div>
    </Content>
  )
}

const Content = styled.div`
font-family: var(--Nova);
font-weight: 400;
padding-top: 28px;
padding-bottom: 14px;
border-bottom: 1px solid #FAFAFB;
  .topbar__container{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const LeftSide = styled.div`
display: flex;
.left__action{
  display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    margin-right: 13px;
    span{
      margin-right: 10px;
    }
}
`

const RighSide = styled.div`
display: flex;
align-items: center;
font-size: 20px;
line-height: 24px;
color: var(--light-black);
 .topbar__profile{
   display: flex;
   align-items: center;
   margin-right: 32px;
   cursor: pointer;
   span{
     margin-left: 6px;
   }
 }
 .topbar__card{
  position: relative;
  .topbar__card--badge{
    width: 20px;
    height: 20px;
    font-weight: bold;
    font-size: 10px;
    line-height: 150%;
    position: absolute;
    top: -13px;
    right: -13px;
    background-color: var(--primary-red);
    border-radius: 50%;
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.5px;
    font-family: var(--Poppins);
  }
 }
 .topbar__items{
   margin-bottom: 0;
   margin-left: 21px;
 }
 .topbar__cost{
   margin: 0 6px 0 32px;
   color: rgba(38, 38, 38, 0.5);
 }
 .topbar__search{
   border: none;
   cursor: pointer;
   background-color: transparent;
   padding: 0;
 }
 @media only screen and (max-width:530px) {
   .topbar__profile span,
   .topbar__items,
   .topbar__cost{
     display: none;
   }
  .topbar__search{
    margin-left: 20px;
  }
 }
`