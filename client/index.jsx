import React from 'react';
import ReactDOM from 'react-dom';
import { MainContent } from './components';

ReactDOM.render(
  <div className="whole-resume">
    <span>wesley choi</span>
    <MainContent />
  </div>, 
  document.getElementsByClassName('app')[0]);