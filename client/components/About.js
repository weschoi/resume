import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div className="section about">
            <div className="section-title">about</div>
            <span style={{'width': '420px'}}>I like creating things that are useful beyond their visual appeal and meaningful enough to genuinely impact people’s lives. I also like user interfaces. And data presentation. Mostly developing experiences that are unique and complementary to natural human behavior. Here are some other things I like: football, basketball, stand-up comedy and podcasts.</span>
        </div>
    )
  }
}