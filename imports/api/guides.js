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
    return Guide.insert(obj);
  },

  "guide.find"(selector) {
    check(selector, String);
    return (Guide.find({ownerId: selector}, {}).fetch());
  },

  "guide.search"(selector) {
    check(selector, Object);
    return (Guide.find(selector, {}).fetch());
  },

  "guide.searchByObjectId"(id, num) {
    check(id, String);
    check(num, String);
    return (Guide.find({id: Mongo.ObjectID(num)}, {}).fetch());
  },

  "user.find"(selector) {
    check(selector, String);
    return (Meteor.users.find({_id: selector}, {}).fetch());
  },

  "user.logout"(){
    // Meteor.logout();
    Meteor.users.update({username: this.username}, {$set: { "services.resume.loginTokens" : [] }});
  },

  "guide.AddColor"(curr, num) {
    check(curr, String);
    check(num, String);

    // return Guide.find({_id: curr, "sectionId": Mongo.ObjectID(num)}, {}).fetch();

    return Guide.update({_id: curr, "item.$.sectionId": Mongo.ObjectID(num)},
      {$push: { "item.$.colors": {
        name: "color name",
        hex: "#000",
      }}});
  },

  "guide.UpdateColor"(num, sectionI, i, arr) {
    check(num, String);
    check(i, String);
    check(arr, Array);

    var index = parseInt(i),
    selector = {},
    operator = {};

    selector['item.' + sectionI + '.colors.' + i + "." + arr[0]] = arr[1]; // {'colors.0.hex' : '#fff'}
    operator['$set'] = selector;  // {'$inc' : {'comments.0.num_likes' : 1} }

    // return Guide.find({_id: curr, "sectionId": Mongo.ObjectID(num)}, {}).fetch();

    return Guide.update({"item.$.sectionId": Mongo.ObjectID(num)}, operator);
  },

});
