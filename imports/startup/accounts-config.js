import {Accounts, AccountsCommen} from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY",
});

Accounts.config({
  loginExpirationInDays: null,
});
