import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

import AllGuides from './Guides.jsx';

import {Guide} from '../../api/guides.js';

export default class AddGuide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guides: []
    };
  }

  addGuide(event) {
    event.preventDefault();
    var addItem = event.currentTarget;
    Meteor.call("guide.insert", {
      name: "Your new Style Guide",
      owner: Meteor.user().username,
      ownerId: Meteor.userId(),
      createdAt: new Date(),
      item: [{
        sectionId: new Mongo.ObjectID(),
        name: "Color pallet",
        type: "color",
        colors: [],
      }],
    }, function(err, result){
      if (err) { console.log(err); }

      var datum  = new Date().toLocaleDateString();
      var guide = <AllGuides key={result} name="Your new Style Guide" owner={Meteor.user().username} itemId={Meteor.userId()} date={datum} />;
      console.log(guide);
      addItem.insertBefore(guide, addItem);
      // that.state.guides.push(<AllGuides key={result} name="Your new Style Guide" owner={Meteor.user().username} itemId={Meteor.userId()} date={datum} />)
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
