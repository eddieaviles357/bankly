- BUG #1: routes/auth login route
  User.authenticate returns a promise but is never resolved causing app to crash.
