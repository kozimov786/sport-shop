import React from 'react'
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'


import LogoImg from '../../../image/logo.svg';
import VisaImg from '../../../image/visa.png';
import PaypalImg from '../../../image/Paypal.png';
import MastercarImg from '../../../image/mastercard.png';
import WesternImg from '../../../image/Western-union.png';


export default function Footer() {
  return (
    <Wrapper>
      <div className='container'>
        <FooterTop>
          <div className='footer__info'>
            <img src={LogoImg} alt="logo" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className='footer__follow'>
            <h3>Follow Us</h3>
            <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            <div>
              <a className='footer__facebook' href="/">
                <FaFacebookF color='#385C8E' />
              </a>
              <a href="/">
                <BsTwitter color='#03A9F4' />
              </a>
            </div>
          </div>
          <div className='footer__contact'>
            <h3>Contact Us</h3>
            <address>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</address>
          </div>
        </FooterTop>
        <FooterMenu>
          <div>
            <h2>Infomation</h2>
            <div className='flex'>
              <a href="/">
                About Us
              </a>
              <a href="/">
                Infomation
              </a>
              <a href="/">
                Privacy Policy
              </a>
              <a href="/">
                Terms & Conditions
              </a>
            </div>
          </div>
          <div>
            <h2>Infomation</h2>
            <div className='flex'>
              <a href="/">
                About Us
              </a>
              <a href="/">
                Infomation
              </a>
              <a href="/">
                Privacy Policy
              </a>
              <a href="/">
                Terms & Conditions
              </a>
            </div>
          </div>
          <div>
            <h2>Infomation</h2>
            <div className='flex'>
              <a href="/">
                About Us
              </a>
              <a href="/">
                Infomation
              </a>
              <a href="/">
                Privacy Policy
              </a>
              <a href="/">
                Terms & Conditions
              </a>
            </div>
          </div>
          <div>
            <h2>Infomation</h2>
            <div className='flex'>
              <a href="/">
                About Us
              </a>
              <a href="/">
                Infomation
              </a>
              <a href="/">
                Privacy Policy
              </a>
              <a href="/">
                Terms & Conditions
              </a>
            </div>
          </div>
        </FooterMenu>
        <FooterBottom>
          <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
          <div>
            <a href="/">
              <img src={MastercarImg} alt="" />
            </a>
            <a href="/">
              <img src={PaypalImg} alt="" />
            </a>
            <a href="/">
              <img src={VisaImg} alt="" />
            </a>
            <a href="/">
              <img src={WesternImg} alt="" />
            </a>
          </div>
        </FooterBottom>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding-top: 154px;
  padding-bottom: 54px;
  background-color: #BCDDFE;
`
const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: normal;
font-size: 12px;
line-height: 15px;
font-family: var(--Nova);
  .footer__info,.footer__follow,.footer__contact{
    width: 221px;
  }
  img{
    margin-bottom: 16px;
  }
  h3{
    font-family: var(--Poppins);
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
  }
  .footer__facebook{
    margin-right: 40px;
  }
  @media screen and (max-width:750px) {
    flex-wrap: wrap;
    justify-content: center;
    .footer__info,.footer__follow,.footer__contact{
    margin: 20px;
  }
  }
`

const FooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 63px;
  .flex{
    display: flex;
    flex-direction: column;

  }
  h2{
    font-weight: normal;
font-size: 18px;
line-height: 27px;
margin-bottom: 30px;
  }
  a{
    font-weight: normal;
font-size: 14px;
line-height: 21px;
color: var(--light-black);
transition: color .3s ease-in-out;
  &:hover{
    color: var(--primary-red);
  }
  }
  @media screen and (max-width:750px) {
    flex-wrap: wrap;
    justify-content: center;
    .flex{
      margin: 20px;
    }
  }
`

const FooterBottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-top: 1px solid #F6F7F8;
padding-top: 30px;
div{
  display: flex;
  align-items: center;
  a{
    margin-left: 20px;
  }
}
p{
  font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #C1C8CE;
margin-bottom: 0;
}
@media screen and (max-width:750px) {
    flex-wrap: wrap;
    justify-content: center;
    p{
      text-align: center;
    }
    div{
      margin-top: 30px;
    }
  }
`