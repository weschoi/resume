import React from 'react';

export default class Contact extends React.Component {

  render() {
    return (
      <div className="section contact">

        <div className="section-title">contact</div>

        <div className="description column-container">

          <div className="subsection">
            <div>email</div>
            <div>portfolio</div>
            <div>github</div>
            <div>linkedin</div>
          </div>

          <div className="subsection">
            <div><a href="mailto:weschoi.creative@gmail.com">weschoi.creative@gmail.com</a></div>
            <div><a href="http://www.weschoi.com/">weschoi.com</a></div>
            <div><a href="https://github.com/weschoi">github.com/weschoi</a></div>
            <div><a href="https://www.linkedin.com/in/wesley-choi-289529102/">linkedin.com/in/wesley-choi-289529102/</a></div>
          </div>

        </div>
      </div>
    )
  }
}