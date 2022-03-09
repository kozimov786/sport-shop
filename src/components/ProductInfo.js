import React from 'react'
import styled from 'styled-components'
import Review from './Review'
import { IoMdCart } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { uiActions } from '../Redux/uiSlice'
import { useParams } from 'react-router-dom'
import Counter from './Counter'

export default function ProductInfo({ PRODUCTS }) {

  const dispatch = useDispatch()
  const v = useParams()

  const item = PRODUCTS.find(item => item.id === v.id)

  const addToCartHandler = () => {
    dispatch(uiActions.AddCart({
      id: item.id,
      name: item.name,
      cost: item.cost,
      img: item.url
    }))
  }
  return (
    <Info>
      <h2>{item.name} </h2>
      <div className='reviews'>
        <Review />
        <p><span>0 </span>reviews</p>
        <a href='/'>Submit a review</a>
      </div>
      <div className='price'>
        <span className="cost">$ {item.cost}</span>
        <span className="old-cost">$ {item.oldCost}</span>
        <span className='sale-cost'>{item.sale}% Off</span>
      </div>
      <div className='more__info'>
        <span>Availability:</span>
        <span>In stock</span>
      </div>
      <div className='more__info'>
        <span>Category:</span>
        <span>Accessories</span>
      </div>
      <div className='more__info'>
        <span>Free shipping</span>
      </div>
      <div className="colors">
        <span>Select Color:</span>
        <div className="flex">
          <label className="blue">
            <input type="radio" name="color" value="blue" />
            <div className="button"><span></span></div>
          </label>

          <label className="orange">
            <input type="radio" name="color" value="orange" />
            <div className="button"><span></span></div>
          </label>

          <label className="black">
            <input type="radio" name="color" value="black" />
            <div className="button"><span></span></div>
          </label>

          <label className="amber">
            <input type="radio" name="color" value="amber" />
            <div className="button"><span></span></div>
          </label>
        </div>
      </div>
      <div className="size">
        <label htmlFor="sortFilter" >Size:</label>
        <select name="sortFilter" id="sortFiler">
          <option value="12">12</option>
          <option value="12">12</option>
          <option value="12">12</option>
          <option value="12">12</option>
          <option value="12">12</option>
        </select>
      </div>
      <Counter item={item} />
      <div className="buttons">
        <div className='actions'>
          <button

            onClick={addToCartHandler}
          >
            <IoMdCart size={18} color='#33A0FF' />
            <span>Add to Cart</span>
          </button>
          <button>
            <AiOutlineHeart size={18} color='#33A0FF' />
          </button>
        </div>
      </div>
      <div className="shares">
        <a href="/">
          <FaFacebookF />
          <span>Share on Facebook</span>
        </a>
        <a className='twitter' href="/">
          <BsTwitter />
          <span>Share on Twitter</span>
        </a>
      </div>
    </Info>
  )
}

const Info = styled.div`
h2{
  font-weight: 500;
font-size: 24px;
line-height: 36px;
}
.colors{
   display: flex;
   width: 100%;
   justify-content: start;
   align-items: center;
   border-top: 2px solid #F6F7F8;
   padding-top: 22px;
   padding-bottom: 22px;
 }
 input {
  display: none;
}

.button {
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  margin: 10px;
  cursor: pointer;
}

.button span {
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  padding: 0;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border-radius: 100%;
  background: #eeeeee;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition: ease .3s;
}

.orange .button span {
  background: #FC3E39;
}

.amber .button span {
  background: #FFF600;
}

.black .button span {
  background: #171717;
}

.blue .button span {
  background: #006CFF;
}

.purple .button span {
  background: #FF00B4;
}

.gray .button span {
  background: #EFDFDF;
}

 input:checked .button {
  border: 2px solid #fff;
}
.price{
  margin-bottom: 17px;
}
.more__info{
  margin-bottom: 15px;
  span{
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    margin-right: 30px;
    color: var(--light-black);
  }
}
.reviews{
   display: flex;
   align-items: center;
   font-size: 14px;
    line-height: 17px;
    font-family: var(--Nova);
    font-weight: normal;
    padding-bottom: 17px;
    margin-bottom: 27px;
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
 .size {
   width: 100%;
   padding-bottom: 21px;
   border-bottom: 2px solid #F6F7F8;
  p{
    margin: 0;
    margin-right: 47px;
  }
  label{
    margin-right: 82px;
  }
  select{
    margin-right: 56px;
    border: 2px solid #F1F3F4;
    padding: 9px 67px 9px 16px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  border-radius: 2px;
  }
  button{
    width: 56px;
    height: 58px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    &:hover{
      background-color:#F1F3F4;
    }
  }
 }

 .buttons{
   margin-top: 22px;
   display: flex;
   justify-content: space-between;
   padding-bottom: 22px;
   border-bottom: 2px solid #F6F7F8;


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
 }
 .shares{
   width: 100%;
   display: flex;
   margin-top: 22px;
   margin-bottom: 48px;
   a{
     display: flex;
     align-items: center;
     padding: 13px 30px;
     background-color: #385C8E;
     white-space: nowrap;
     color: #fff;
     border-radius: 3px;
   }
   .twitter{
     background-color: #03A9F4;
     margin-left: 10px;
   }
 }
`