import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {Mongo} from 'meteor/mongo';

// import '../imports/startup/accounts-config.js';
import Dashboard from '../imports/ui/Dashboard.jsx';
import Login from '../imports/ui/login.jsx';
import App from '../imports/ui/app/App.jsx';

import {FlowRouter} from 'meteor/kadira:flow-router';


FlowRouter.route('/', {
    name: "Dashboard",
    action: function(params, queryParams) {
      if (Meteor.user() === null) {
        render(<Login />, document.querySelector(".containerer"));
      } else {
        render(<Dashboard />, document.querySelector(".containerer"));
      }
    }
});

FlowRouter.route('/:user/:guide', {
    name: "blog",
    action: function(params, queryParams) {
      render(<App owner={params.user} guideId={params.guide} />, document.querySelector(".containerer"));
    }
});
