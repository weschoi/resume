import React from 'react';

export default class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="section">
        <span>education</span>

        <div className="description">
          <div className="subsection">
            <span>2017&ensp;</span><a href="https://www.hackreactor.com/" style={{"textDecoration": "none", "color": "black"}}>hack reactor</a>&ensp;–&ensp;advanced software engineering immersion program
          </div>
          <div className="subsection">
            <span>2014&ensp;</span><a href="https://msu.edu/" style={{"textDecoration": "none", "color": "black"}}>michigan state university</a>&ensp;–&ensp;b.a. advertising
          </div>
        </div>
      </div>
    )
  }
}