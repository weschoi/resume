import React from 'react';
import ReactDOM from 'react-dom';
import { About, Skills, Projects, Experience, Education, Contact, Name } from './components/index';

ReactDOM.render(
  <div className="resume">
    <Name />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Education />
    <Contact />
  </div>, document.getElementsByClassName('app')[0]);