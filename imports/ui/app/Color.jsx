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

  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  checkIfHex(input){
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(input);
  }

  hex(event){
    var that = this,
    color = event.currentTarget.value,
    destination = event.currentTarget.getAttribute("name"),
    li = event.currentTarget.parentNode.parentNode,
    nth = li.getAttribute("data-nth"),
    section = li.parentNode.parentNode.getAttribute("data-num"),
    sectionI = li.parentNode.parentNode.getAttribute("data-nth");
    if (this.checkIfHex(color)) {
      Meteor.call("guide.UpdateColor", section, sectionI, nth, [destination, color], function(err, result){
        err ? console.log(err) : "";
        if (result === 1) {
          that.setState({
            hex: color,
            rgb: that.hexToRgb(color),
          });
          that.refs.rgbR.value = that.state.rgb.r;
          that.refs.rgbG.value = that.state.rgb.g;
          that.refs.rgbB.value = that.state.rgb.b;
        }
      });
    }
  }

  rgb(event) {
    var that = this,
    color = that.rgbToHex(parseInt(that.refs.rgbR.value), parseInt(that.refs.rgbG.value), parseInt(that.refs.rgbB.value)),
    destination = event.currentTarget.getAttribute("name"),
    li = event.currentTarget.parentNode.parentNode,
    nth = li.getAttribute("data-nth"),
    section = li.parentNode.parentNode.getAttribute("data-num"),
    sectionI = li.parentNode.parentNode.getAttribute("data-nth");
    if (this.checkIfHex(color)) {
      Meteor.call("guide.UpdateColor", section, sectionI, nth, [destination, color], function(err, result){
        err ? console.log(err) : "";
        if (result === 1) {
          that.setState({
            hex: color,
            rgb: that.hexToRgb(color),
          });
          that.refs.hex.value = that.state.hex;
        }
      });
    }
  }

  render() {
    var style = {
      backgroundColor: this.state.hex
    }
    return (
      <li data-nth={this.props.nth}>
        <figure style={style}><span>Copy</span></figure>
        <p>
          <svg>
            <svg>
            <g transform="translate(0,-952.36218)"><path d="M4.5,952.5l-4.4,4.4c0,0,0,0,0,0c-0.2,0.2-0.2,0.5,0,0.7l13.3,13.3c0.1,0.1,0.2,0.1,0.2,0.1l5.6,1.3c0.1,0,0.2,0,0.2,0
            		c0.3-0.1,0.4-0.3,0.4-0.6l-1.3-5.6c0-0.1-0.1-0.2-0.1-0.2L5.2,952.5c-0.1-0.1-0.2-0.1-0.3-0.1C4.8,952.3,4.6,952.4,4.5,952.5z
            		 M17.5,966.2l-3.6,3.6L1.2,957.2l3.6-3.6L17.5,966.2z M18.8,971.2l-3.9-0.9l3-3L18.8,971.2z"/></g>
            </svg>
          </svg>

          <input type="text" name="name" defaultValue={this.props.name} /></p>
        <p>
          <svg>
            <svg>
            <g transform="translate(0,-952.36218)"><path d="M4.5,952.5l-4.4,4.4c0,0,0,0,0,0c-0.2,0.2-0.2,0.5,0,0.7l13.3,13.3c0.1,0.1,0.2,0.1,0.2,0.1l5.6,1.3c0.1,0,0.2,0,0.2,0
            		c0.3-0.1,0.4-0.3,0.4-0.6l-1.3-5.6c0-0.1-0.1-0.2-0.1-0.2L5.2,952.5c-0.1-0.1-0.2-0.1-0.3-0.1C4.8,952.3,4.6,952.4,4.5,952.5z
            		 M17.5,966.2l-3.6,3.6L1.2,957.2l3.6-3.6L17.5,966.2z M18.8,971.2l-3.9-0.9l3-3L18.8,971.2z"/></g>
            </svg>
          </svg>

          <input type="text" ref="hex" name="hex" defaultValue={this.state.hex} maxLength="7" onBlur={this.hex.bind(this)} /></p>
        <p className="multiple">
          <svg>
            <svg>
            <g transform="translate(0,-952.36218)"><path d="M4.5,952.5l-4.4,4.4c0,0,0,0,0,0c-0.2,0.2-0.2,0.5,0,0.7l13.3,13.3c0.1,0.1,0.2,0.1,0.2,0.1l5.6,1.3c0.1,0,0.2,0,0.2,0
            		c0.3-0.1,0.4-0.3,0.4-0.6l-1.3-5.6c0-0.1-0.1-0.2-0.1-0.2L5.2,952.5c-0.1-0.1-0.2-0.1-0.3-0.1C4.8,952.3,4.6,952.4,4.5,952.5z
            		 M17.5,966.2l-3.6,3.6L1.2,957.2l3.6-3.6L17.5,966.2z M18.8,971.2l-3.9-0.9l3-3L18.8,971.2z"/></g>
            </svg>
          </svg>

          rgb(
          <input type="number" name="hex" ref="rgbR" defaultValue={this.state.rgb.r} maxLength="3" onBlur={this.rgb.bind(this)} />,
          <input type="number" name="hex" ref="rgbG" defaultValue={this.state.rgb.g} maxLength="3" onBlur={this.rgb.bind(this)} />,
          <input type="number" name="hex" ref="rgbB" defaultValue={this.state.rgb.b} maxLength="3" onBlur={this.rgb.bind(this)} />
        )</p>
      </li>
    );
  }
}

this.Proptype = {
  name: React.PropTypes.string.isRequired,
  hex: React.PropTypes.string.isRequired,
  nth: React.PropTypes.number.isRequired,
}
