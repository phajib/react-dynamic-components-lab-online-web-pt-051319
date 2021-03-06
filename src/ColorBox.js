import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const reducedOpacity = this.props.opacity - 0.1;
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {/* your conditional code here! */}
        {this.props.opacity >= 0.2 ? <ColorBox opacity = {reducedOpacity} /> : null}
      </div>
    )
  }

}

