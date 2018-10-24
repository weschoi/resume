import React from 'react';

export default class Skills extends React.Component {

  render() {
    return (
      <div className="section skills">

        <div className="section-title">skills</div>
        
        <div className="description">

        <div className="subsection">
          <span>technical</span>
          <div>strong&ensp;–&ensp;javascript&ensp;html&ensp;css&ensp;sass&ensp;react&ensp;redux&ensp;mysql&ensp;postgresql&ensp;ajax&ensp;responsive</div>
          <div>experienced&ensp;–&ensp;angularjs&ensp;json&ensp;socket.io&ensp;git&ensp;bootstrap&ensp;jquery&ensp;node</div>
        </div>
        
        <div className="subsection">
          <span>creative</span>&ensp;&ensp;photoshop&ensp;illustrator&ensp;indesign&ensp;sketch&ensp;invision
        </div>

        </div>
      </div>
    )
  }
}