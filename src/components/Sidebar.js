import React from 'react'
import styled from 'styled-components';
import MultiRangeSlider from './Range'

export default function Sidebar() {
  return (
    <Content>
      <Deals>
        <h2 className='sidebar__heading'>Hot Deals</h2>
        <ul>
          <li>
            <p>Nike</p>
            <span>2</span>
          </li>
          <li>
            <p className='active'>Airmax</p>
            <span className='active'>22</span>
          </li>
          <li>
            <p>Nike</p>
            <span>12</span>
          </li>
          <li>
            <p>Adidas</p>
            <span>32</span>
          </li>
          <li>
            <p>Vans</p>
            <span>24</span>
          </li>
          <li>
            <p>All star</p>
            <span>42</span>
          </li>
          <li>
            <p>Adidas</p>
            <span>2</span>
          </li>
        </ul>
      </Deals>
      <PriceRange>
        <h2 className='sidebar__heading'>Prices</h2>
        <MultiRangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
        />
      </PriceRange>
      <Color>
        <h2 className="sidebar__heading">Colors</h2>
        <div className='color__flex'>

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

          <label className="purple">
            <input type="radio" name="color" value="purple" />
            <div className="button"><span></span></div>
          </label>

          <label className="gray">
            <input type="radio" name="color" value="gray" />
            <div className="button"><span></span></div>
          </label>

        </div>
      </Color>
      <Brand>
        <h2 className='sidebar__heading'>Brands</h2>
        <ul>
          <li>
            <p>Nike</p>
            <span>2</span>
          </li>
          <li>
            <p className='active'>Nike</p>
            <span className='active'>22</span>
          </li>
          <li>
            <p>Adidas</p>
            <span>32</span>
          </li>
          <li>
            <p>Silemans</p>
            <span>24</span>
          </li>
        </ul>
      </Brand>
      <Button className='sidebar__btn' type='button'>More</Button>
    </Content>
  )
}

const Content = styled.div`
  width: 270px;
  .sidebar__heading{
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    margin-bottom: 25px;
  }

`
const Deals = styled.div`
  background-color: #F6F7F8;
  padding: 20px;
  margin-bottom: 30px;
  ul{
    font-family: var(--Nova);
    li{
      display: flex;
      align-items: center;
      justify-content: space-between;

      p{
        color: var(--light-black);
      }
      span{
        color: rgba(34, 38, 42, 0.35);
      }
    }
    .active{
      color: #33A0FF !important;
   }
  }
`
const PriceRange = styled(Deals)`
`
const Color = styled(Deals)`
 .color__flex{
   display: flex;
   align-items: center;
   justify-content: center;
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

`
const Brand = styled(Deals)`

`
const Button = styled(Deals)`
 border: none;
 text-align: center;
 cursor: pointer;
`