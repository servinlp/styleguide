import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

import Login from './login.jsx';
import Header from './Header.jsx';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "hoi",
      // userId: Meteor.userId(),
      // username: Meteor.user().username,
      // username: "hoi"
    };
  }

  getUsername() {
    // console.log({this.props.userId});
    var test = Meteor.users.find({_id: this.props.userId});
    console.log(test);
  }


  logout() {
    Meteor.logout();
    render(<Login />, document.querySelector(".containerer"));
  }

  userName() {
    console.log(Meteor.user().username);
    return (Meteor.user().username);
  }

  render() {
    return (
      <div className="dashboard" onLoad={this.getUsername}>
        <nav>
          <button>
            <img src="/img/user.svg" alt="user button" />
            {this.state.test}
            {this.props.userId}
          </button>
        </nav>
        <Header title="You're styleguides"/>
        <main>
          <button onClick={this.logout}>
            logout
          </button>
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  userId: React.PropTypes.string.isRequired,
};
