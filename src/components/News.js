import React from 'react'
import styled from 'styled-components'

import nikeImg from '../image/nike-logo.png';
import figmaImg from '../image/figma-logo.png';
import kronosImg from '../image/kronos-logo.png';




export default function News() {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="heading news__heading">Latest News</h2>
        <NewsList>
          <NewsItem>
            <img src={nikeImg} alt="nike logo" />
            <div>
              <span>01 Jan, 2015</span>
              <h3>Fashion Industry</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </NewsItem>
          <NewsItem>
            <img src={figmaImg} alt="figma logo" />
            <div>
              <span>01 Jan, 2015</span>
              <h3>Best Design Tools</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </NewsItem>
          <NewsItem>
            <img src={kronosImg} alt="kronos logo" />
            <div>
              <span>01 Jan, 2015</span>
              <h3>HR Community</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </NewsItem>
        </NewsList>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding-top: 60px;
padding-bottom: 60px;
.news__heading{
  margin-bottom: 72px;
  text-align: center;
}
`
const NewsList = styled.ul`
  display: flex;
  justify-content: space-between;
`
const NewsItem = styled.ul`
  display: flex;
  align-items: center;
  div{
    width: 200px;
    margin-left: 35px;
    span{
      font-weight: 500;
      font-size: 18px;
      line-height: 27px;
      color: #C1C8CE;
    }
    h3{
      font-weight: 600;
      font-size: 22px;
      line-height: 33px;
      margin-bottom: 0;
    }
    p{
      margin-bottom: 0;
      font-family: var(--Nova);
    }
  }
`