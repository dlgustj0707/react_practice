import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.section`
  text-align: center;
  padding: 50px 0;
  .menu-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 900px;
    height: 1000px;
    margin: 0 auto;
}
`;

const MenuImg = styled.div`
  height: 300px;
  width: 300px;
  flex: 1 1 30%;
`;

const Menu = () => {
  return (
    <MenuContainer className="menu">
      <div className="menu-container">
        <MenuImg>
          <a href="https://brand.naver.com/zespri/">
            <img src="./kiwi.jpg" alt="kiwi" />
          </a>
          <div className="menu-title">kiwi</div>
        </MenuImg>

        <MenuImg>
          <a href="https://brand.naver.com/zespri/">
            <img src="./kiwi.jpg" alt="kiwi" />
          </a>
          <div className="menu-title">kiwi</div>
        </MenuImg>

        <MenuImg>
          <a href="https://brand.naver.com/zespri/">
            <img src="./kiwi.jpg" alt="kiwi" />
          </a>
          <div className="menu-title">kiwi</div>
        </MenuImg>

        <MenuImg>
          <a href="https://brand.naver.com/zespri/">
            <img src="./kiwi.jpg" alt="kiwi" />
          </a>
          <div className="menu-title">kiwi</div>
        </MenuImg>

        <MenuImg>
          <a href="https://brand.naver.com/zespri/">
            <img src="./kiwi.jpg" alt="kiwi" />
          </a>
          <div className="menu-title">kiwi</div>
        </MenuImg>

        <MenuImg>
          <a href="https://brand.naver.com/zespri/">
            <img src="./kiwi.jpg" alt="kiwi" />
          </a>
          <div className="menu-title">kiwi</div>
        </MenuImg>

        <MenuImg>
          <a href="https://brand.naver.com/zespri/">
            <img src="./kiwi.jpg" alt="kiwi" />
          </a>
          <div className="menu-title">kiwi</div>
        </MenuImg>

        <MenuImg>
          <a href="https://brand.naver.com/zespri/">
            <img src="./kiwi.jpg" alt="kiwi" />
          </a>
          <div className="menu-title">kiwi</div>
        </MenuImg>

        <MenuImg>
          <a href="https://brand.naver.com/zespri/">
            <img src="./kiwi.jpg" alt="kiwi" />
          </a>
          <div className="menu-title">kiwi</div>
        </MenuImg>
        
      </div>
    </MenuContainer>
  );
};

export default Menu;