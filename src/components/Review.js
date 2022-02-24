import React from 'react';
import styled from 'styled-components';

import StarNone from '../image/star-gray.png';
import StarFull from '../image/star-yellow.png';

export default function Review() {
  return (
    <ReviewList>
      <img src={StarFull} alt="star" />
      <img src={StarFull} alt="star" />
      <img src={StarFull} alt="star" />
      <img src={StarFull} alt="star" />
      <img src={StarNone} alt="star" />
    </ReviewList>
  )
}

const ReviewList = styled.div`
   display: flex;
   align-items: center;
   img:not(:last-child){
     margin-right: 13px;
   }
`
