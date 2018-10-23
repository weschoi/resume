import React from 'react';

export default class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  // http://detroit.vc/
  render() {
    return (
      <div className="section">
        <span>experience</span>

        <div className="description">
          <div className="subsection">
            <span>2018&ensp;<span><a href="https://www.google.com/" style={{"textDecoration": "none", "color": "black"}}>google</a>&ensp;–&ensp;graphic designer [contract]</span></span>
            <div>Developed single page website that reinvents user experience of journalistic content</div>
            <div>Implemented magic scroll that dynamically changes interface with user scrolling</div>
            <div>Built collapsible nav menu from scratch while staying true to original mockup</div>
          </div>

          <div className="subsection">
            <span>2017&ensp;<span><a href="https://www.box.com/" style={{"textDecoration": "none", "color": "black"}}>box</a>&ensp;–&ensp;presentation designer [contract]</span></span>
            <div>Applied brand guidelines and messaging strategies to create over 20 slideshows for boxworks 2017</div>
            <div>Worked with brand team to revamp customer pitch decks and all accompanying visuals; e.g. infographics</div>
          </div>

          <div className="subsection">
            <span>2015&ensp;<span><a href="http://detroit.vc/" style={{"textDecoration": "none", "color": "black"}}>detroit venture partners</a>&ensp;–&ensp;graphic designer</span></span>
            <div>Collaborated with a d.c.-based dev firm to design the new detroit.vc website</div>
            <div>Led art direction for event campaign (250 guests) that set visuals for invitations, presentations, badges, etc</div>
          </div>
        </div>
      </div>
    )
  }
}