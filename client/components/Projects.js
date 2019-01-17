import React from 'react';

export default class Projects extends React.Component {

  render() {
    return (
      <article className="projects">

        <h1>projects</h1>

        <div>

          <section>
            <span><a href="http://humansofnewyork.herokuapp.com/" style={{"textDecoration": "none", "color": "#a7a9ac"}}>humans of new york [wip]</a></span>
            <ul>
              <li>Developed single page website that reinvents user experience of journalistic content</li>
              <li>Implemented magic scroll that dynamically changes interface with user scrolling</li>
              <li>Built collapsible nav menu from scratch while staying true to original mockup</li>
            </ul>
          </section>

          <section>
            <span><a href="http://calc.cool/" style={{"textDecoration": "none", "color": "#a7a9ac"}}>calculator</a></span>
            <ul>
              <li>Converted css to scss format which slashed code base and lead to greater readability</li>
              <li>Implemented scss partials that modularized styling code for optimal maintainability</li>
              <li>Demonstrated ux capabilities and thorough understanding of different logic systems</li>
            </ul>
          </section>

          <section>
            <span><a href="http://weatherstyle.herokuapp.com/" style={{"textDecoration": "none", "color": "#a7a9ac"}}>weather</a></span>
            <ul>
              <li>Developed simple web app that elegantly displays current weather info for 5 cities</li>
              <li>Conditionally renders background elements based on location and timezone</li>
            </ul>
          </section>

          <section>
            <span><a href="https://peared.io/" style={{"textDecoration": "none", "color": "#a7a9ac"}}>peared.io</a></span>
            <ul>
              <li>Implemented responsive design with custom media queries for flexible ui across all devices</li>
              <li>Built front-end views with css3 styling, applying consistent visuals across all components</li>
              <li>Managed application state with redux for improved maintainability and data accessibility</li>
              <li>Designed postgresql schemas for efficient querying that optimize restful apis</li>
            </ul>
          </section>

          <section>
            <span><a href="http://helpreactor.herokuapp.com/" style={{"textDecoration": "none", "color": "#a7a9ac"}}>help reactor</a></span>
            <ul>
              <li>Abstracted complex data away from users by generating interactive visual tools from recharts</li>
              <li>Architected react hierarchy for better data flow for improved extensibility</li>
              <li>Designed back-end routes in node to serve unique data based on user permissions</li>
            </ul>
          </section>
          
        </div>
        
      </article>
    )
  }
}