import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Guide} from '../../api/guides.js';

export default class Section extends Component {
  addColor() {
    console.log(this);
    console.log(event);
    var id = ReactDOM.findDOMNode(this).querySelectorAll("header[data-guide]")[0].getAttribute("data-guide"),
    num = event.currentTarget.parentNode.parentNode.parentNode.getAttribute("data-num");
    console.log(id);
    console.log(num);
    Meteor.call("guide.AddColor", id, num);
  }

  test() {
    console.log(this);
  }

  render() {
    var name = this.props.name.replace(/\s+/g, '').toLowerCase();
    return (
      <section id={name} className={this.props.type == "color" ? "colorset" : "fontset"} data-num={this.props.id} onClick={this.test}>
        <header>
          <h2>Color pallet</h2>
        </header>
        <ul>
          <li className="add">
            <figure onClick={this.addColor.bind(this)}>
              <svg viewBox="0 0 50 50">
                <line x1="25" y1="0" x2="25" y2="50"/>
                <line x1="50" y1="25" x2="0" y2="25"/>
              </svg>
            </figure>
            <h3>Name</h3>
            <p>#EEEEEE</p>
            <p>rgb(238, 238, 238)</p>
          </li>
        </ul>
      </section>
    );
  }
}

this.Proptype = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
}
