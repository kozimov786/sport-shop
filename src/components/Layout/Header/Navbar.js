import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import LogoImg from '../../../image/logo.svg';
import HomeDropdown from './HomeDropdown';

export default function Navbar() {
  return (
    <Content>
      <div className="container navbar__container">
        <Link to='/'>
          <img src={LogoImg} alt="logo" width={134} height={44} />
        </Link>
        <Nav>
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
 .navbar__container{
   display: flex;
   align-items: center;
   justify-content: space-between;
 }
`
const Nav = styled.nav`
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
`