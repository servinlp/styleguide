import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Guide} from '../../api/guides.js';

import SetColor from "./Color.jsx";

export default class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // section: [0,0,0,]
    };
  }
  componentDidMount() {
    var that = this, item, arr = [], num = ReactDOM.findDOMNode(this).getAttribute("data-num");
    Meteor.call("guide.searchByObjectId", "sectionId", num, function(err, results) {
      if (err) { console.log(err); }
      item = results[0].item[0].colors;
      for (var i = 0; i < item.length; i++) {
        num = Math.floor(Math.random() * 10000);
        arr.push(<SetColor key={num} name={item[i].name} hex={item[i].hex} />);
        that.setState({
          Colors: arr,
        });
      }
    });
  }

  addColor(event) {
    var id = document.querySelectorAll("header[data-guide]")[0].getAttribute("data-guide"),
    num = event.currentTarget.parentNode.parentNode.parentNode.getAttribute("data-num");
    console.log(num);
    Meteor.call("guide.AddColor", id, num, function(err, result){
      err ? console.log(err) : "";
      console.log(result);
    });
  }

  render() {
    var name = this.props.name.replace(/\s+/g, '').toLowerCase();
    return (
      <section id={name} className={this.props.type == "color" ? "colorset" : "fontset"} data-num={this.props.id}>
        <header>
          <h2>Color pallet</h2>
        </header>
        <ul>
          {this.state.Colors}
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
