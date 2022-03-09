import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSelector, useDispatch } from 'react-redux';
import { GrClose } from 'react-icons/gr'

import { uiActions } from '../../../Redux/uiSlice';
import LogoImg from '../../../image/logo.svg';
import HomeDropdown from './HomeDropdown';

export default function Navbar() {
  const dispatch = useDispatch()
  const show = useSelector(state => state.ui.menuShow)

  const showMenu = () => {
    dispatch(uiActions.ShowMenu())
  }
  return (
    <Content>
      <div className="container navbar__container">
        <Link className='nav__logo' to='/'>
          <img src={LogoImg} alt="logo" width={134} height={44} />
        </Link>
        <button className='nav__menu-btn' onClick={showMenu} show={show}>
          {show ? <GrClose size={34} /> : <GiHamburgerMenu size={34} />}
        </button>
        <Nav show={show} >
          <ul>
            <li className='nav__home'>
              <a className='nav__active' href="/home">Home</a>
              <div className='nav__dropdown-wrapper'>
                <HomeDropdown />
              </div>
            </li>
            <li>
              <a href="/home">Bugs</a>
            </li>
            <li>
              <a href="/home">Sneakers</a>
            </li>
            <li>
              <a href="/home">Belt</a>
            </li>
            <li>
              <a href="/home">Contact</a>
            </li>
          </ul>
        </Nav>
      </div>
    </Content>
  )
}

const Content = styled.div`
padding-top: 26px;
padding-bottom: 26px;
.nav__menu-btn{
  border: none;
  background-color: transparent;
  padding: 0;
  display: none;
  position: absolute;
  top: 100px;
  right: 20px;
  z-index: 1000;
}
 .navbar__container{
   display: flex;
   align-items: center;
   justify-content: space-between;
 }
 @media only screen and (max-width:810px) {
   margin-bottom: 40px;
  .nav__menu-btn{
    display: block;
  }
  .nav__logo{
    position: absolute;
    top: 100px;
    z-index: 99;
    left: 20px;
  }
 }
 @media only screen and (max-width:560px) {
  .navbar__container{
    flex-direction: column;
  justify-content: center;
  align-items: center;
  }

}
`
const Nav = styled.nav`
transition: all .3s ease;
 ul{
   display: flex;
   align-items: center;
   li{
     &:not(:last-child){
       margin-right: 97px;
     }
     .nav__active{
       color: var(--blue);
     }
     a{
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      text-transform: uppercase;
      color: var(--light-black);
      transition: color .3s ease;
      &:hover{
       color: var(--blue);
      }
     }
   }
   @media only screen and (max-width:1030px) {
    li{
          &:not(:last-child){
            margin-right: 47px;
          }
      }
    }
    @media only screen and (max-width:810px) {
    li{
          &:not(:last-child){
            margin-right: 27px;
          }
          a{
            font-weight: 500;
            font-size: 20px;
            line-height: 26px;
       }
      }

   }

 .nav__dropdown-wrapper{
   display: none;
 }
 .nav__home{
   position: relative;
   &:hover .nav__dropdown-wrapper{
     display: block;
   }
 }
 }

 @media only screen and (max-width:810px) {
  transform: ${props => props.show ? "translateX(0)" : "translateX(-200%)"};
  width: 100%;
  height: 100vh;
  background-color: red;
  position: absolute;
  right: 0;
  top: 70px;
  z-index: 2;
  padding:120px 20px;
  background: #ccc;
  border-radius: 5px;
  ul{
    flex-direction: column;
    li{
      padding: 20px 0;
      width: 100%;
      border-bottom: 1px solid #000;
      &:not(:last-child){
            margin-right: 0;
      }
    }
  }
 }
`