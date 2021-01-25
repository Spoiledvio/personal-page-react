import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MainPage from "./MainPage/MainPage"
import SnakeGame from "./SnakeGame/SnakeGame"
import AboutMe from './AboutMe/AboutMe';
import Skills from './Skills/Skills';
import ContactMe from './ContactMe/ContactMe';



ReactDOM.render(
  <div className="background">
    <MainPage />
    <SnakeGame />
    <AboutMe />
    <Skills />
    <ContactMe />
  </div>,
  document.getElementById('root')
);

