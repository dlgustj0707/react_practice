import React from 'react';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
  height: 100px;
  background-color: #1f5b1f;
  line-height: 40px;
  z-index: 1;
  position: sticky;
  top: 0;
  ::after {
    content: "";
    display: block;
    clear: both;
  }
`;

const Logo = styled.h1`
  font-size: 35px;
  float: left;
  margin: 0;
`;

const NavMenu = styled.div`
  float: right;
`;

const Navbutton = styled.ul`
  margin: 0;
  list-style-type: none;  
  > li {
    float: left;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
  }
`;

const Navbar = () => {
  
  return (
    <NavbarContainer>
      <div className="container">
        <Logo>
          <a href="./index.html">
            <i className="fas fa-kiwi-bird"></i> KiWi
          </a>
        </Logo>
        <NavMenu>
          <Navbutton>
            <li><a href="./index.html">HOME</a></li>
            <li><a href="#">MENU</a></li>
            <li><a href="https://terms.naver.com/entry.naver?docId=777181&cid=48180&categoryId=48249">INFOR</a></li>
          </Navbutton>
        </NavMenu>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;