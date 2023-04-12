- BUG #1: routes/auth login route
  User.authenticate returns a promise but is never resolved causing app to crash.

- BUG #2: class User static method update
  password can be changed without being hashed.

- BUG #3: routes/users delete route
  User.delete returns a promise but is never resolved causing app to crash.

- BUG #4: class User static method get
  User.get does not throw ExpressError with 404.

- BUG #5: middleware/auth.js authUser does not verify if JWT is signed with our SECRET KEY

- BUG #6: helpers/partialUpdate uses \* to return all fields, can potentially lead to bugs in the future.
