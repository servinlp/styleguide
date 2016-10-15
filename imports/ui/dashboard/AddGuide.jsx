import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';
// import {Mongo} from 'meteor/mongo';

import {Guide} from '../../api/guides.js';

export default class AddGuide extends Component {

  addGuide(event) {
    event.preventDefault();
    Meteor.call("guide.insert", {
      name: "Your new Style Guide",
      owner: Meteor.user().username,
      ownerId: Meteor.userId(),
      createdAt: new Date(),
    });
  }

  render() {
    return (
      <a className="add" onClick={this.addGuide.bind(this)}>
        <svg viewBox="0 0 50 50">
          <line x1="25" y1="0" x2="25" y2="50"/>
          <line x1="50" y1="25" x2="0" y2="25"/>
        </svg>
        <p>Add</p>
      </a>
    );
  }
}
