import React from 'react';

export default class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div className="section name">
            <div className="section-title">wesley choi</div>
            
            <div className="description">
                <div className="subsection">
                    <span>designer + developer</span>
                </div>
            </div>
        </div>
    )
  }
}