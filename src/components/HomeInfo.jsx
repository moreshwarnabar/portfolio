import React from 'react';
import { Link } from 'react-router-dom';

import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Moreshwar</span> 👋
      <br />A Computer Science graduate student at ASU
    </h1>
  ),
  2: (
    <InfoBox
      text="Passionate about developing full stack solutions"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Worked on many side projects and picked up skills along the way"
      link="/projects"
      btnText="Check out my projects"
    />
  ),
  4: (
    <InfoBox
      text="Want to connect with me?"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
