import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {Mongo} from 'meteor/mongo';

// import {FlowRouter} from 'meteor/kadira:flow-router';
// import {mount} from 'react-mounter';
// import {ReactLayout} from 'meteor/kadira:react-layout';

import '../imports/startup/accounts-config.js';
import Dashboard from '../imports/ui/Dashboard.jsx';
import Login from '../imports/ui/login.jsx';

Meteor.startup(() => {
    // var username = Meteor.users.find({_id: Meteor.userId()}).fetch();
    // var username = Meteor.user();

    // console.log(username);
    // var userId = Meteor.userId();
    if (Meteor.user() === null) {
      render(<Login />, document.querySelector(".containerer"));
    } else {
      // console.log(Meteor.user());
      // console.log(Meteor.user().username);
      render(<Dashboard />, document.querySelector(".containerer"));
    }
});
