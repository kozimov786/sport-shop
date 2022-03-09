import React from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../Redux/uiSlice';

export default function ProductTabs() {

  const toggle = useSelector(state => state.ui.tabToggle)
  const dispatch = useDispatch()


  return (
    <Wrapper>
      <TabMenu>
        <li className={toggle === 1 ? "menu__active" : ''}>
          <button onClick={() => dispatch(uiActions.TabsToggle(1))}>Product Infomation</button>
        </li>
        <li className={toggle === 2 ? "menu__active" : ''}>
          <button onClick={() => dispatch(uiActions.TabsToggle(2))}>Reviews</button>
          <span>0</span>
        </li>
        <li className={toggle === 3 ? "menu__active" : ''}>
          <button onClick={() => dispatch(uiActions.TabsToggle(3))}>Another tab</button>
        </li>
      </TabMenu>
      <TabContent>
        <div className={toggle === 1 ? "tab__content--active" : 'tab__content'} >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa laboriosam ducimus nihil cupiditate libero, minus sequi impedit harum sapiente corrupti dicta iusto fugit facilis quam amet quo cumque dignissimos ratione! Delectus possimus iure quae sit obcaecati libero odio a ab repudiandae quisquam voluptatem ex, quibusdam soluta sapiente dignissimos dolor!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa laboriosam ducimus nihil cupiditate libero, minus sequi impedit harum sapiente corrupti dicta iusto fugit facilis quam amet quo cumque dignissimos ratione! Delectus possimus iure quae sit obcaecati libero odio a ab repudiandae quisquam voluptatem ex, quibusdam soluta sapiente dignissimos dolor!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa laboriosam ducimus nihil cupiditate libero, minus sequi impedit harum sapiente corrupti dicta iusto fugit facilis quam amet quo cumque dignissimos ratione! Delectus possimus iure quae sit obcaecati libero odio a ab repudiandae quisquam voluptatem ex, quibusdam soluta sapiente dignissimos dolor!
          </p>
        </div>
        <div className={toggle === 2 ? "tab__content--active" : 'tab__content'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto harum eius fuga veritatis. Sit reprehenderit aperiam nam deleniti ducimus
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto harum eius fuga veritatis. Sit reprehenderit aperiam nam deleniti ducimus
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto harum eius fuga veritatis. Sit reprehenderit aperiam nam deleniti ducimus
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto harum eius fuga veritatis. Sit reprehenderit aperiam nam deleniti ducimus
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto harum eius fuga veritatis. Sit reprehenderit aperiam nam deleniti ducimus
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto harum eius fuga veritatis. Sit reprehenderit aperiam nam deleniti ducimus
          </p>
        </div>
        <div className={toggle === 3 ? "tab__content--active" : 'tab__content'}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto harum eius fuga veritatis. Sit reprehenderit aperiam nam deleniti ducimus quod aliquid, ad voluptatibus et earum asperiores numquam, ea laudantium sapiente nulla quidem minus doloremque? Ad numquam error quis nobis, fugiat distinctio maxime molestias? Modi veniam voluptatem unde dolore expedita, tempore, repellendus repudiandae, exercitationem nobis aut animi a impedit doloremque aspernatur. Assumenda ratione optio, doloribus deleniti reiciendis illum voluptatem natus. Ipsam quo placeat maiores facere commodi! Ex possimus, quisquam obcaecati nulla quia consectetur cumque unde quasi atque ratione eaque maiores repellat dolorem modi quibusdam voluptate rem voluptatum eius excepturi pariatur!
          </p>
        </div>
      </TabContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
 background-color: #FAFAFB;
 margin-bottom: 77px;
`
const TabMenu = styled.ul`
display: flex;
align-items: center;
border-bottom: 4px solid #E5E8EA;
padding: 30px;

.menu__active{
  &::before{
    content: '';
    width: 150px;
    height: 4px;
    position: absolute;
    bottom: -34px;
    left: 0;
    display: block;
    background-color: #2E90E5;
  }
  button{
    color: var(--blue);
  }
}
  li{
    position: relative;
    margin-right: 78px;
    font-family: var(--Nova);
    span{
      color: rgba(38, 38, 38, 0.25);
    }
    button{
      border: none;
      background-color: transparent;
      cursor: pointer;
      font-size: 18px;
      line-height: 22px;
    }
  }
`
const TabContent = styled.div`
  padding: 20px 30px;
  .tab__content{
    display: none;
  }
  .tab__content--active{
    display: block;
  }

  p{
    font-weight: normal;
    font-size: 12px;
    line-height: 180%;
    letter-spacing: 0.5px;
    color: #9098B1;
  }
`