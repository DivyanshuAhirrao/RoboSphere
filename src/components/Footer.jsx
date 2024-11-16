import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #222;
  color: white;
  padding: 1rem 0;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 RoboSphere. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
