import React from 'react';

export default class Education extends React.Component {

  render() {
    return (
      <article className="education">

        <h1>education</h1>

        <div>

          <section>
            <span>2017&ensp;</span><a href="https://www.hackreactor.com/" style={{"textDecoration": "none", "color": "black"}}>hack reactor</a>&ensp;–&ensp;advanced software engineering immersion program
          </section>

          <section>
            <span>2014&ensp;</span><a href="https://msu.edu/" style={{"textDecoration": "none", "color": "black"}}>michigan state university</a>&ensp;–&ensp;b.a. advertising
          </section>
          
        </div>
        
      </article>
    )
  }
}