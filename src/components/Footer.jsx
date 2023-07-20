import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  font-size: 20px;
  text-align: center;
  color: aliceblue;
  background-color: #1f5b1f;
  padding: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p>&copy; kiwi lover</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;