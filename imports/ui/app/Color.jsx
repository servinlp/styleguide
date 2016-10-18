import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Guide} from '../../api/guides.js';

export default class SetColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hex: this.props.hex,
      rgb: this.hexToRgb(this.props.hex),
    };
  }

  hexToRgb(hex){
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

  render() {
    var style = {
      backgroundColor: this.state.hex,
    }
    return (
      <li>
        <figure style={style}></figure>
        <input type="text" defaultValue={this.props.name} />
        <input type="text" defaultValue={this.state.hex} />
        <p>rgb(
          <input type="text" defaultValue={this.state.rgb.r} />
          <input type="text" defaultValue={this.state.rgb.g} />
          <input type="text" defaultValue={this.state.rgb.b} />
        )</p>
      </li>
    );
  }
}

this.Proptype = {
  name: React.PropTypes.string.isRequired,
  hex: React.PropTypes.string.isRequired,
}
