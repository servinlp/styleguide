import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';

export default class AllGuides extends Component {
  render() {
    var url = "/" + this.props.owner + "/" + this.props.ownerId + "/";
    // console.log(url);
    return (
      <a href="#">
        <svg viewBox="0 0 50 50">
          <line x1="25" y1="0" x2="25" y2="50"/>
          <line x1="50" y1="25" x2="0" y2="25"/>
        </svg>
        <p>{this.props.name}</p>
        <p>{this.props.owner}</p>
        <p>{this.props.date}</p>
      </a>
    );
  }
}

AllGuides.propTypes = {
  name: React.PropTypes.string.isRequired,
  owner: React.PropTypes.string.isRequired,
  ownerId: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
}
