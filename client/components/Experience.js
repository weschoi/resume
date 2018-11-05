import React from 'react';

export default class Experience extends React.Component {

  render() {
    return (
      <div className="section experience">

        <div className="section-title">experience</div>

        <div className="description">
        
          <div className="subsection">
            <span>2018&ensp;<span><a href="https://www.google.com/" style={{"textDecoration": "none", "color": "black"}}>google</a>&ensp;–&ensp;graphic designer [contract]</span></span>
            <ul>
              <li>Implemented global rebranding of Google Ads & Google Marketing Platform alongside fellow creatives</li>
              <li>Applied newest standards to hundreds of sales collateral, now unified under a single visual brand</li>
              <li>Developed material with compelling illustrations for sellers across several products and languages</li>
            </ul>
          </div>

          <div className="subsection">
            <span>2017&ensp;<span><a href="https://www.box.com/" style={{"textDecoration": "none", "color": "black"}}>box</a>&ensp;–&ensp;presentation designer [contract]</span></span>
            <ul>
              <li>Applied brand guidelines and messaging strategies to create over 20 slideshows for boxworks 2017</li>
              <li>Worked with brand team to revamp customer pitch decks and all accompanying visuals; e.g. infographics</li>
            </ul>
          </div>

          <div className="subsection">
            <span>2015&ensp;<span><a href="http://detroit.vc/" style={{"textDecoration": "none", "color": "black"}}>detroit venture partners</a>&ensp;–&ensp;graphic designer</span></span>
            <ul>
              <li>Collaborated with a d.c.-based dev firm to design the new detroit.vc website</li>
              <li>Led art direction for event campaign (250 guests) that set visuals for invites, presentations, badges, etc</li>
            </ul>
          </div>

        </div>
      </div>
    )
  }
}