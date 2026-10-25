export const users = {
  standard: { username: 'standard_user', password: 'secret_sauce' },
  lockedOut: { username: 'locked_out_user', password: 'secret_sauce' },
  wrongPassword: { username: 'standard_user', password: 'wrong_password' },
};

export const errors = {
  lockedOut: 'Sorry, this user has been locked out',
  invalidCredentials: 'Username and password do not match',
  usernameRequired: 'Username is required',
};
