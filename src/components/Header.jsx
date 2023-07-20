import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: relative;
  height: 450px;
  text-align: center;
  color: black;
  
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url("./background.jpg");
    opacity: 0.5;
    background-position: center center;
    background-repeat: no-repeat;
  }
`;

const HdTitle = styled.h2`
  font-size: 80px;
  margin-top: 0;
  padding-top: 150px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <HdTitle>kiwi love</HdTitle>
      </div>
    </HeaderContainer>
  );
};

export default Header;