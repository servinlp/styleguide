import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import {check} from 'meteor/check';

import Login from '../ui/login.jsx';

export const Guide = new Mongo.Collection("guides");
// export const Users = new Mongo.Collection("users");

if (Meteor.isServer) {
  Meteor.publish('guides', function tasksPublication() {
    return Guide.find({ownerId: Meteor.userId()}, {}).fetch();
  });
}

Meteor.methods({
  "guide.insert"(obj) {
    check(obj, Object);
    if (! this.userId) {
      throw new Meteor.Error("not-authorized");
    }
    Guide.insert({
      name: "Your new Style Guide",
      owner: Meteor.user().username,
      ownerId: Meteor.userId(),
      createdAt: new Date(),
    });
  },

  "guide.find"(selector) {
    check(selector, String);
    return (Guide.find({ownerId: selector}, {}).fetch());
  },

  "guide.search"(selector) {
    check(selector, Object);
    return (Guide.find(selector, {}).fetch());
  },

  "user.find"(selector) {
    check(selector, String);
    return (Meteor.users.find({_id: selector}, {}).fetch());
  },

  "user.logout"(){
    // Meteor.logout();
    Meteor.users.update({username: this.username}, {$set: { "services.resume.loginTokens" : [] }});
  },

});
