import React from 'react';
import { About, Skills, Projects, Experience, Education, Contact } from './index';

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    )
  }
}