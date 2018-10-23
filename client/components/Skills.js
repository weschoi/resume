import React from 'react';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="section">
        <span>skills</span>
        
        <div className="description">
          <div className="subsection">
            <span>technical</span>
            <div>strong&ensp;–&ensp;javascript&ensp;html&ensp;css&ensp;sass&ensp;react&ensp;redux&ensp;mysql&ensp;postgresql&ensp;ajax&ensp;responsive</div>
            <div>experienced&ensp;–&ensp;angularjs&ensp;json&ensp;socket.io&ensp;git&ensp;bootstrap&ensp;jquery&ensp;node</div>
          </div>
          <div className="subsection">
            <span>creative</span>&ensp;–&ensp;photoshop&ensp;illustrator&ensp;indesign&ensp;sketch&ensp;invision
          </div>

        </div>
        
      </div>
    )
  }
}

{/* <span>
        technical
strong – javascript html css sass react redux mysql postgresql ajax responsive experienced – angularjs json socket.io git bootstrap jquery node
creative – photoshop illustrator indesign sketch invision
        </span> */}