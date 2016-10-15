import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';

import {Guide} from '../../api/guides.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // guideName: "",
    };
  }

  loadAll() {
    var that = this;
    Meteor.call("guide.search", {_id: this.props.guideId}, function(err, results) {
      if (err) { console.log(err); }
      that.refs.guideHeader.innerHTML = results[0].name;
    });
  }

  render() {
    return (
      <div className="app" onLoad={this.loadAll()}>
        <nav>
          <p>{this.props.owner}</p>
          <p>{this.props.guideId}</p>
        </nav>
        <header>
          <h1 ref="guideHeader"></h1>
        </header>
      </div>
    );
  }
}

App.propType = {
  owner: React.PropTypes.string.isRequired,
  guideId: React.PropTypes.string.isRequired,
}
