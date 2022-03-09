import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function HomeDropdown() {
  return (
    <Dropdown>
      <div className='nav__dropdown'>
        <div>
          <h2 className='nav__dropdown_heading'>Category name</h2>
          <div className='nav__menu'>
            <ul>
              <li>
                <a href="/">Coporate Shoes</a>
              </li>
              <li>
                <a href="/">Sneakers</a>
              </li>
              <li>
                <a href="/">Sandals</a>
              </li>
              <li>
                <a href="/">Sport Shoe</a>
              </li>
              <li>
                <a href="/">Trainers</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Coporate Shoes</a>
              </li>
              <li>
                <a href="/">Sneakers</a>
              </li>
              <li>
                <a href="/">Sandals</a>
              </li>
              <li>
                <a href="/">Sport Shoe</a>
              </li>
              <li>
                <a href="/">Trainers</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className='nav__dropdown_heading'>Category name</h2>
          <div className='nav__menu'>
            <ul>
              <li>
                <Link to="/hot-deal">HOT DEAL</Link>
              </li>
              <li>
                <a href="/">Sunglasses</a>
              </li>
              <li>
                <a href="/">Belts</a>
              </li>
              <li>
                <a href="/">Handbags</a>
              </li>
              <li>
                <a href="/">Sneakers</a>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="/hot-deal">HOT DEAL</Link>

              </li>
              <li>
                <a href="/">Sunglasses</a>
              </li>
              <li>
                <a href="/">Belts</a>
              </li>
              <li>
                <a href="/">Handbags</a>
              </li>
              <li>
                <a href="/">Sneakers</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className='nav__dropdown_heading'>Category name</h2>
          <div className='nav__menu'>
            <ul>
              <li>
                <Link to="/hot-deal">HOT DEAL</Link>

              </li>
              <li>
                <a href="/">Sunglasses</a>
              </li>
              <li>
                <a href="/">Belts</a>
              </li>
              <li>
                <a href="/">Handbags</a>
              </li>
              <li>
                <a href="/">Sneakers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Dropdown>
  )
}

const Dropdown = styled.div`
position: relative;
&::before{
     content: '';
     width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 5px solid #F1F3F4;
      position: absolute;
      top: -5px;
      left: 30%;

   }


  .nav__dropdown{
      background-color: #fff;
      filter: drop-shadow(0px 30px 30px rgba(0, 0, 0, 0.102));
      border-top: 2px solid #F1F3F4;
      position: absolute;
      padding: 38px 38px 38px 84px;
      top: 100%;
      left: 50%;
      transform: translateX(-30%);
      display: flex;

   .nav__menu{
     display: flex;

   }
   .nav__dropdown_heading{
      font-weight: 500;
      font-size: 22px;
      white-space: nowrap;
      line-height: 33px;
      margin-bottom: 12px;
      color: #C1C8CE;
   }

     ul{
        width: 138px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        li{
            margin-bottom: 10px;
          }
        a{
          white-space: nowrap;
          color: var(--light-black);
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
        }
       }
  }
      @media screen and (max-width:810px){
        .nav__dropdown{
          left: 30%;
        }
         .nav__menu{
           flex-direction:column;
         }
         &::before{
         content: '';
         top: -5px;
         left: 10%;

   }
       }

       @media screen and (max-width:710px){
        .nav__dropdown{
          width: 100%;
          padding: 20px;
          left: 30%;
          flex-direction:column;
          ul{
            width: 100%;
          }
        }
         .nav__menu{
           flex-direction:column;
         }
       }
`