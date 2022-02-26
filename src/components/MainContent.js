import React from 'react'
import styled from 'styled-components'
import { CgMenuGridR } from 'react-icons/cg'
import { FiMenu } from 'react-icons/fi'
import Article from './Article'
import Product from './Products/Product'
import ProductList from './ProductList'
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../Redux/uiSlice'

export default function MainContent() {

  const gridShow = useSelector(state => state.ui.gridShow)
  const listShow = useSelector(state => state.ui.listShow)

  const dispatch = useDispatch()

  const activeGridHandler = () => {
    dispatch(uiActions.GridShow())
  }
  const activeListHandler = () => {
    dispatch(uiActions.ListShow())

  }

  const PRODUCTS = [
    {
      id: 1,
      name: "Nike Sneakers",
      url: require("../image/bag-yellow.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 2,
      name: "Nike Sneakers",
      url: require("../image/nike-sneaker.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 3,
      name: "Nike Sneakers",
      url: require("../image/card-yellow-show-back.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 4,
      name: "Nike Sneakers",
      url: require("../image/card-yellow.shoe.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 5,
      name: "Nike Sneakers",
      url: require("../image/sneaker-blue.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 6,
      name: "Nike Sneakers",
      url: require("../image/nike-sneaker.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 7,
      name: "Nike Sneakers",
      url: require("../image/sneaker-blue.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 8,
      name: "Nike Sneakers",
      url: require("../image/card-yellow.shoe.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: 9,
      name: "Nike Sneakers",
      url: require("../image/card-yellow.shoe.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
  ]
  return (
    <Wrapper>
      <div className='main__article'>
        <Article />
      </div>
      <Menu>
        <div className='menu__filter'>
          <p><span>13 </span>Items</p>
          <div className='menu__sort'>
            <label htmlFor="sortFilter" >Sort By</label>
            <select name="sortFilter" id="sortFiler">
              <option value="name">Name</option>
              <option value="name">Name</option>
              <option value="name">Name</option>
              <option value="name">Name</option>
              <option value="name">Name</option>

            </select>
          </div>
          <div className="menu__show">
            <label htmlFor="sortFilter" >Show</label>
            <select name="sortFilter" id="sortFiler">
              <option value="12">12</option>
              <option value="12">12</option>
              <option value="12">12</option>
              <option value="12">12</option>
              <option value="12">12</option>

            </select>
          </div>
        </div>
        <div className='menu__icons'>
          <button type='button' onClick={activeGridHandler}>
            <CgMenuGridR size={22} color={gridShow ? "#40BFFF" : "#C1C8CE"} />
          </button>
          <button type='button' onClick={activeListHandler}>
            <FiMenu size={22} color={listShow ? "#40BFFF" : "#C1C8CE"} />
          </button>
        </div>
      </Menu>
      <div>
        {gridShow && <Grid>
          {PRODUCTS.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </Grid>}

        {listShow && <List>
          {PRODUCTS.map((item) => (
            <ProductList key={item.id} item={item} />
          ))}
        </List>}

      </div>

      <Pagination>
        <button type='submit'>1</button>
        <button type='submit'>2</button>
        <button className='active' type='submit'>3</button>
        <button type='submit'>4</button>
        <button type='submit'>5</button>
      </Pagination>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100%;
margin-left: 32px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap:34px;
  margin-bottom: 34px;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  padding-left: 23px;
  background-color: #F6F7F8;
  margin-top: 23px;
  margin-bottom: 26px;
  justify-content: space-between;
  font-family: var(--Nova);
  font-weight: normal;
font-size: 16px;
line-height: 19px;
  .menu__filter{
    display: flex;
    align-items: center;
  }
  p{
    margin: 0;
    margin-right: 47px;
  }
  label{
    margin-right: 12px;
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

`

const Pagination = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #FAFAFB;
margin-bottom: 32px;

button{
  background-color: transparent;
  border: none;
  width: 62px;
  height: 56px;
  font-family: var(--Nova);
  cursor: pointer;
  &:hover{
    background-color: #F1F3F4;
  }
}
.active{
  background-color: #40BFFF;
  color: #fff;
}
`

const List = styled.div`

`