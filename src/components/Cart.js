import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Counter from './Counter';
import Path from './Path'
import { CgClose } from 'react-icons/cg'

export default function Cart() {

  const cartItems = useSelector(state => state.ui.cartItems)

  return (
    <>
      <Path />
      <Wrapper>
        <div className='container'>
          <div className="menu">
            <p>Product</p>
            <div>
              <p>Price</p>
              <p>QTY</p>
              <p>Unit Price</p>
            </div>
          </div>
          {cartItems && cartItems.map(cartItem => (
            <Item>
              <div>
                <button>
                  <CgClose color='#FF6875' />
                </button>
                <img src={cartItem.img} alt="" />
                <h2>{cartItem.name}</h2>
              </div>
              <p>$998</p>
              <Counter />
              <p>$ {cartItem.cost}</p>
            </Item>
          ))}
          <CartBottom>
            <div>
              <form action="https://htmlacademy.ru">
                <input type="text" placeholder='Voucher code' required />
                <button type='submit'>Redeem</button>
              </form>
            </div>
            <Check>
              <p>
                <span>Subtotal</span>
                <span>$998</span>
              </p>
              <p>
                <span>Shipping fee</span>
                <span>$20</span>
              </p>
              <p>
                <span>Coupon</span>
                <span>No</span>
              </p>
              <div>
                <h3>TOTAL</h3>
                <p>$118</p>
              </div>
              <button>Check out</button>
            </Check>
          </CartBottom>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
padding-top: 46px;
 width: 100%;
 .menu{
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 2px solid #F6F7F8;
   font-weight: 500;
      font-size: 20px;
      line-height: 30px;
   div{
    display: flex;
   align-items: center;
   justify-content: space-between;
   p{
     margin-left: 155px;

   }
   }
 }

`

const Item = styled.div`
padding-top: 60px;
border-bottom: 2px solid #F6F7F8;
padding-bottom: 60px;
display: flex;
align-items: center;
justify-content: space-between;
button{
  border: none;
  background-color: rgba(255, 104, 117, 0.05);
  cursor: pointer;
  color: #FF6875;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
img{
   width: 137px;
   height: 94px;
   margin-right: 30px;
   margin-left: 50px;
 }
 div{
   display: flex;
   align-items: center;
 }
 h2{
  font-weight: normal;
font-size: 18px;
line-height: 27px;
margin-bottom: 0;
margin-right: 312px;
 }
 p{
   margin-bottom: 0;
 }
`

const CartBottom = styled.div`
padding-top: 90px;
padding-bottom: 156px;
display: flex;
align-items: start;
justify-content: space-between;
 form{
   width: 369px;
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

const Check = styled.div`
width: 377px;
 margin-right: 50px;
 p{
   display: flex;
   align-items: center;
   justify-content: space-between;
 }
 div{
  display: flex;
   align-items: center;
   justify-content: space-between;
   padding-top: 28px;
   border-top: 2px solid #F6F7F8;
 }
 button{
   width: 100%;
   padding: 16px;
   border: none;
   background-color: #33A0FF;
   color: #fff;font-weight: 500;
   line-height: 27px;
   cursor: pointer;
 }
`