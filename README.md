User Authentication and Management System Documentation
Introduction
The User Authentication and Management System is a robust Node.js application designed to handle user authentication and management functionalities for web applications. This system provides secure user signup, login, password management, and account deletion features. Additionally, it includes OTP generation for password reset and email notifications for user signup.

Technologies Used
Node.js: Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server-side.
Express.js: Express.js is a minimalist web application framework for Node.js. It simplifies the process of building web applications by providing a set of robust features for handling HTTP requests, defining routes, and more.
MongoDB: MongoDB is a popular NoSQL database that provides flexibility and scalability for storing and managing user data. It stores data in flexible, JSON-like documents, making it ideal for handling complex data structures.
bcryptjs: bcryptjs is a JavaScript library used for hashing passwords securely. It employs the bcrypt hashing algorithm, which is known for its strength against brute-force attacks.
jsonwebtoken (JWT): JSON Web Tokens (JWT) are compact, URL-safe tokens that are used for securely transmitting information between parties. JWTs are commonly used for authentication and authorization in web applications.
Nodemailer: Nodemailer is a module for Node.js applications that allows sending emails. It supports various transport methods and provides features for sending HTML emails, attachments, and more.
Axios: Axios is a popular HTTP client for making requests to external services from Node.js applications. It supports Promise-based requests and provides features for handling request and response data.
dotenv: dotenv is a module that loads environment variables from a .env file into process.env. It simplifies the process of managing environment-specific configurations in Node.js applications.
cors: cors is a middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.js applications. It allows controlling access to resources from different origins.

Project Structure
The project follows a modular structure, with separate directories for different components:

Config: Contains configuration files for database connection and mailer setup.
Controllers: Houses logic for handling user authentication and management requests.
Middlewares: Includes middleware functions for verifying JWT tokens.
Models: Defines Mongoose schemas for user data.
Routes: Defines routes for handling user authentication and management endpoints.
Utils: Contains utility functions such as generating random numbers and sending emails.
Functionalities
The User Authentication and Management System provides the following functionalities:

Signup
Endpoint: POST /signup
Description: Creates a new user account with provided username, email, and password.
Request Body: { userName, email, password }
Response: { message, status }

Login
Endpoint: POST /login
Description: Authenticates a user with provided email and password, generating a JWT token for further access.
Request Body: { email, password }
Response: { message, status }

Edit Password
Endpoint: POST /editpassword
Description: Updates user password with a new one.
Request Body: { password }
Response: { message, status }

Edit User Information
Endpoint: POST /edituserinfo
Description: Updates user information such as username and email.
Request Body: { userName, email }
Response: { message, status }

Delete Account
Endpoint: POST /deleteUser
Description: Deletes user account permanently.
Response: { message, status }

Get OTP (One-Time Password)
Endpoint: POST /getOtp
Description: Sends OTP to the user's email for password reset.
Request Body: { email }
Response: { message, status, userOtp }

Change Password with OTP
Endpoint: POST /changePassword
Description: Changes user password using OTP verification.
Request Body: { password }
Response: { message, status }

Installation and Setup
To set up the User Authentication and Management System, follow these steps:

Clone the repository:
git clone <repository-url>

Install dependencies:
npm install

Create a .env file:
Create a .env file in the root directory of the project and add the following environment variables:
makefile
CONNECTION_STRING=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
MAIL_USER=<your-email>
MAIL_PASS=<your-email-password>

Start the server:
npm start

Usage
To use the User Authentication and Management System, follow these steps:

Make requests to the defined endpoints:
Use tools like Postman or curl to make requests to the defined endpoints.

Include necessary data in the requests:
Include the required data (e.g., request body) in the requests according to the endpoint specifications.

Handle responses from the server:
Handle responses from the server based on the provided status and message.

Conclusion
The User Authentication and Management System provides comprehensive functionalities for managing user accounts securely in web applications. It ensures secure authentication, allows users to update their information, and provides options for password reset and account deletion. Additionally, it incorporates features for sending OTPs and welcome emails to users, enhancing the overall user experience.

This documentation aims to provide a comprehensive overview of the system, including its features, endpoints, and usage instructions. If you have any further questions or need additional assistance, please feel free to ask.
