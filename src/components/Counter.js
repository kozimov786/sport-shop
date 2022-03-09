import React from 'react'
import styled from 'styled-components'
import { FaMinus } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../Redux/uiSlice'

export default function Counter({ item }) {
  const quantity = useSelector(state => state.ui.quantity)
  const dispatch = useDispatch()

  return (
    <Counts>
      <div className="counter">
        <button className="counter__btn"
          onClick={() => dispatch(uiActions.removeFromCart({
            id: item.id,
          }))}
        >
          <FaMinus size={12} color='#33A0FF' />
        </button>
        <span>{quantity}</span>
        <button className="counter__btn"
          onClick={() => dispatch(uiActions.Increment({
            id: item.id,
            cost: item.cost,
          }))}
        >
          <HiPlus size={16} color='#33A0FF' />
        </button>
      </div>
    </Counts>
  )
}

const Counts = styled.div`
.counter{
    width: 123px;
    background-color: #F6F7F8;
    display: flex;
    .counter__btn{
      border: none;
      background-color: transparent;
      padding:14px 18px;
      cursor: pointer;
    }
    span{
      width: 100%;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`