import React from 'react'
import styled from 'styled-components'

import BgHero from '../../../image/hero-bg.png'

export default function Hero() {
  return (
    <HeroWrapper>
      <div className="container">
        <h1>Super Flash Sale 50% Off</h1>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  width: 100%;
  height: 653px;
  padding-top: 258px;
  background: linear-gradient(180deg, #000000 -73.06%, rgba(0, 0, 0, 0) 100%),
               url(${BgHero});
  h1{
    font-weight: bold;
    font-size: 64px;
    line-height: 150%;
    letter-spacing: 0.5px;
    margin-bottom: 0;
    color: #fff;
    width: 573px;
  }
`