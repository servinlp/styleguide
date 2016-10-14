import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

// import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import {Accounts} from 'meteor/accounts-base';
import Dashboard from './Dashboard.jsx';

// export const Users = new Mongo.Collection("users");

export default class Login extends Component {
  login(event) {
    event.preventDefault();
    var user = this.refs.username.value,
    password = this.refs.password.value;
    Meteor.loginWithPassword(user, password, function(error){
      if (error) {
        console.log(error);
      }
      render(<Dashboard />, document.querySelector(".containerer"));
    });
  }

  register(event) {
    event.preventDefault();
    var user = this.refs.user.value,
    pass = this.refs.pass.value,
    passAgain = this.refs.passAgain.value;
    if (pass == passAgain) {
      Accounts.createUser({username: user, password: pass}, function(error){
        if (error) {
          console.log(error);
        }
        render(<Dashboard />, document.querySelector(".containerer"));
      });
    } else {
      console.log("nope");
    }
  }

  spanStay(index){
    // console.log(this.refs[index].value.length);
    // console.log(this.refs[index].value.length > 0);
    if (this.refs[index].value.length > 0) {
      this.refs[index].classList.add("value");
    } else {
      this.refs[index].classList.remove("value");
    }
  }

  render() {
    return (
      <main className="login">
        <section>
          <form onSubmit={this.login.bind(this)}>
            <fieldset>
              <legend>Login</legend>
              <label>
              <input type="text" ref="username" onBlur={this.spanStay.bind(this, "username")} />
              <span>Username</span></label>
              <label>
              <input type="password" ref="password" onBlur={this.spanStay.bind(this, "password")} />
              <span>Wachtwoord</span></label>
              <input type="submit" value="Login" />
            </fieldset>
          </form>
        </section>

        <section>
          <form onSubmit={this.register.bind(this)}>
            <fieldset>
              <legend>Register</legend>
              <label>
              <input type="text" ref="user" onBlur={this.spanStay.bind(this, "user")} />
              <span>Username</span></label>
              <label>
              <input type="password" ref="pass" onBlur={this.spanStay.bind(this, "pass")} />
              <span>Wachtwoord</span></label>
              <label>
              <input type="password" ref="passAgain" onBlur={this.spanStay.bind(this, "passAgain")} />
              <span>Wachtwoord again</span></label>
              <input type="submit" value="Register" />
            </fieldset>
          </form>
        </section>
      </main>
    );
  }
}
