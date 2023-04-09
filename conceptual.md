### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JWT is a token that can be used to safely transmit data because it's signed.

- What is the signature portion of the JWT? What does it do?
  It's a public/private key, a signature. It verifies that the sender is who it should be.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  The payload can be seen by anyone. It's not encrypted.

- How can you implement authentication with a JWT? Describe how it works at a high level.
  When a user creates an account or logs in we can send a JWT signed with a secret key. When the user tries to
  access protected routes, we can verify if that user is who they should be using their JWT. If they are who they are we can give them access to the protected routes.

- Compare and contrast unit, integration and end-to-end tests.
  Unit tests test the basic functionality of a small unit of code ( function, class methods, etc...).
  Integration tests test the interaction between chunks of code.
  End-to-end tests test the application flow from beginning to end.

- What is a mock? What are some things you would mock?
  A mock is mocking the behavior of packages, dependencies, etc...
  We can mock ajax requests, reading and writing files, inpure functions like random numbers.

- What is continuous integration?
  Continuous integration is basically a practice which developers merge their changes to the main branch many times per day. If usually takes some time to see if the code passes or fails. If the code fails we fix it and repeat.

- What is an environment variable and what are they used for?
  An environment variable is basically a configuration of our code environment.
  If we are testing our code we will set our environment variable to test. Doing so will avoid destroying our production ready code base.

- What is TDD? What are some benefits and drawbacks?
  Test Driven Development is the practice of writing test that will fail first and then work on making the code pass, after that they will refactor the code.
  Some drawbacks are writing to many test that fails first.
  Sometimes we will forget to run the tests. Some tests depend on external dependencies.

- What is the value of using JSONSchema for validation?
  We can avoid many validation errors that come from the client.
  We can be more strict on the data coming in.
  Less code to write.

- What are some ways to decide which code to test?
  One way is to choose the most important files to test.
  Then we choose the least important files and repeat.
  Another way will be to complete a class, function, route, and then test it after implementing it.

- What does `RETURNING` do in SQL? When would you use it?
  'RETURNING' will return the value of the data inserted into the database.
  This will avoid performing another query to the database.
  An example will be inserting a message into the database and wanting to return the message id.

- What are some differences between Web Sockets and HTTP?
  HTTP is a stateless protocol and Web Sockets are stateful.
  With HTTP the client makes a request to the server and the server will respond and it will close the connection.
  With Web Sockets the client and the server establish a connection and it will stay open until the client or the server closes the connections.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I prefer using Express over Flask.
  Express seens much easier to understand and use than Flask in some aspects.
  An example would be middleware.
  On the other hand Flask was much easier to use sessions.
  Express can follow RESTful conventions easier than Flask.
  With Flask we have to use another library for that.
  Since Express uses Nodejs which in turn uses JavaScript, the learning curve is easier that Flask.
