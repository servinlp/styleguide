import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  FlowRouter.route("/", {
    name: "home",
    action() {
      if (Meteor.user() == null) {
        ReactLayout.render(<App />, document.querySelector("main"));
      }
    },
  });
});
 
