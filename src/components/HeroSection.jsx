import styled from 'styled-components';
// import banner from '../assets/banner.jpg';

const HeroContainer = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const HeroText = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroText>Welcome to RoboSphere: Explore the World of Robotics</HeroText>
    </HeroContainer>
  );
};

export default HeroSection;
