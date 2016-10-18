import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';

import Nav from '../dashboard/Nav.jsx';
import Section from './AppSection.jsx';

import {Guide} from '../../api/guides.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // section: [0,0,0,]
    };
  }
  componentDidMount() {
    var that = this, item, arr = [], num;
    Meteor.call("guide.search", {_id: this.props.guideId}, function(err, results) {
      if (err) { console.log(err); }
      that.refs.guideHeader.innerHTML = results[0].name;
      item = results[0].item;
      for (var i = 0; i < item.length; i++) {
        num = Math.floor(Math.random() * 10000);
        arr.push(<Section key={num} name={item[i].name} type={item[i].type} id={item[i].sectionId} />);
        that.setState({
          section: arr,
        });
      }
    });
  }

  render() {
    return (
      <div className="app">
        <Nav app={true} />
        <header data-guide={this.props.guideId} data-owner={this.props.owner}>
          <h1 ref="guideHeader"></h1>
        </header>
        <main>
          {this.state.section}
        </main>
      </div>
    );
  }
}

App.propType = {
  owner: React.PropTypes.string.isRequired,
  guideId: React.PropTypes.string.isRequired,
}
