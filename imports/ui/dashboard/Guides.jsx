import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';

import {Guide} from '../../api/guides.js';

export default class AllGuides extends Component {
  test() {
    console.log("iets?");
    Meteor.call("guide.find", {}, function(error, results) {
      if (error) {
        console.log(error);
      }
      console.log("all results");
      console.log(results);
      console.log("each result"); 
      results.forEach(function(result){
        console.log(result);
      });
    });
    console.log("test2");
  }
  render() {
    return (
      <section onLoad={this.test}>
        <svg viewBox="0 0 50 50">
          <line x1="25" y1="0" x2="25" y2="50"/>
          <line x1="50" y1="25" x2="0" y2="25"/>
        </svg>
        {this.test()}
        <p>{this.props.name}</p>
        <p>{this.props.owner}</p>
        <p>{this.props.date}</p>
      </section>
    );
  }
}

AllGuides.propTypes = {
  name: React.PropTypes.string.isRequired,
  owner: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
}
