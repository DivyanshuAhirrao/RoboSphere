import styled from 'styled-components';
import ServiceCards from "./ServiceCards";
import YoutubeLinks from './YoutubeLinks';
import WhatWeDo from './WhatWeDo';
import LandingPage from './LandingPage';
// import banner from '../assets/banner.jpg';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:8px;
  align-items: center;
  justify-content: center;
  color: blue;
  background:white;
  padding:12px;
`;

const HeroText = styled.h1`
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  font-size: 2.5rem;
  text-align: center;
`;

const HeroSection = () => {
 
  return (
    <HeroContainer>
      <HeroText>Welcome to RoboSphere: Explore the World of Robotics</HeroText>\
      <LandingPage />
      <ServiceCards />
      <WhatWeDo />
      <YoutubeLinks />
    </HeroContainer>
  );
};

export default HeroSection;
