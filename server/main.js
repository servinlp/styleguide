import React from 'react';
import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

import {Guide} from '../imports/api/guides.js';

// import '../imports/startup/accounts-config.js';
// import {FlowRouter} from 'meteor/kadira:flow-router';
// import {mount} from 'react-mounter';
// const

Meteor.startup(() => {
  // code to run on server at startup
  // FlowRouter.route("/", {
  //   name: "home",
  //   action() {
  //     console.log("run");
  //     // if (Meteor.user() == null) {
  //     //   render(<App />, document.querySelector("main"));
  //     // }
  //   },
  // });
  // console.log(this.user());
  // console.log(Meteor.user().username);
  console.log("test");
});
