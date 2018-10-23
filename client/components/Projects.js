import React from 'react';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="section projects">
        <div className="section-title">projects</div>
        <div className="description">
          <div className="subsection">
              <span><a href="http://humansofnewyork.herokuapp.com/" style={{"textDecoration": "none", "color": "#a7a9ac"}}>humans of new york</a></span>
              <div>Developed single page website that reinvents user experience of journalistic content</div>
              <div>Implemented magic scroll that dynamically changes interface with user scrolling</div>
              <div>Built collapsible nav menu from scratch while staying true to original mockup</div>
          </div>
          <div className="subsection">
              <span><a href="http://calcstyle.herokuapp.com/" style={{"textDecoration": "none", "color": "#a7a9ac"}}>calculator</a></span>
              <div>Converted css to scss format which slashed code base and lead to greater readability</div>
              <div>Implemented scss partials that modularized styling code for optimal maintainability</div>
              <div>Demonstrated ux capabilities and thorough understanding of different logic systems</div>
          </div>
          <div className="subsection">
              <span><a href="https://peared.io/" style={{"textDecoration": "none", "color": "#a7a9ac"}}>peared.io</a></span>
              <div>Implemented responsive design with custom media queries for flexible ui across all devices</div>
              <div>Built front-end views with css3 styling, applying consistent visuals across all components</div>
              <div>Managed application state with redux for improved maintainability and data accessibility</div>
              <div>Designed postgresql schemas for efficient querying that optimize restful apis</div>
          </div>
          <div className="subsection">
              <span><a href="http://helpreactor.herokuapp.com/" style={{"textDecoration": "none", "color": "#a7a9ac"}}>help reactor</a></span>
              <div>Abstracted complex data away from users by generating dynamic, interactive visual tools from recharts</div>
              <div>Architected react hierarchy for better data flow for improved extensibility</div>
              <div>Designed back-end routes in node to serve unique data based on user permissions</div>
          </div>
        </div>
      </div>
    )
  }
}