import React from 'react';

export default class Contact extends React.Component {

  render() {
    return (
      <footer className="contact">

        <h1>contact</h1>

        <div>

          <ul>
            <li>email</li>
            <li>portfolio</li>
            <li>github</li>
            <li>linkedin</li>
          </ul>

          <ul>
            <li><a href="mailto:weschoi.creative@gmail.com">weschoi.creative@gmail.com</a></li>
            <li><a href="http://www.weschoi.com/">weschoi.com</a></li>
            <li><a href="https://github.com/weschoi">github.com/weschoi</a></li>
            <li><a href="https://www.linkedin.com/in/wesley-choi-289529102/">linkedin.com/in/wesley-choi-289529102/</a></li>
          </ul>

        </div>

      </footer>
    )
  }
}