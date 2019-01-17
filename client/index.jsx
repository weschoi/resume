import React from 'react';
import ReactDOM from 'react-dom';
import { About, Skills, Projects, Experience, Education, Contact, Name } from './components/index';

ReactDOM.render(
  <main>
    <Name />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Education />
    <Contact />
  </main>, document.getElementsByClassName('app')[0]);