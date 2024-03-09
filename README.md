User Authentication and Management System Documentation
Introduction
The User Authentication and Management System is a Node.js application designed to handle user authentication and management for an e-commerce website. It provides essential functionality for user signup, login, password management, and account deletion. Additionally, it includes features such as sending OTP for password reset and sending welcome emails upon signup.

Technologies Used
Node.js: Server-side JavaScript runtime environment
Express.js: Web application framework for Node.js
MongoDB: NoSQL database for storing user information
bcryptjs: Library for hashing passwords
jsonwebtoken (JWT): JSON Web Token for user authentication
Nodemailer: Module for sending emails
Axios: HTTP client for making requests to external services
dotenv: Module for loading environment variables from a .env file
cors: Middleware for enabling Cross-Origin Resource Sharing (CORS)
Project Structure
Config: Contains configuration files such as database connection and mailer setup.
Controllers: Contains logic for handling user authentication and management requests.
Middlewares: Contains middleware functions for verifying JWT tokens.
Models: Defines Mongoose schemas for user data.
Routes: Defines routes for handling user authentication and management endpoints.
Utils: Contains utility functions such as generating random numbers and sending emails.
Endpoints
POST /signup: Creates a new user account.

Request Body: { userName, email, password }
Response: { message, status }
POST /login: Authenticates a user and generates a JWT token.

Request Body: { email, password }
Response: { message, status }
POST /editpassword: Updates user password.

Request Body: { password }
Response: { message, status }
POST /edituserinfo: Updates user information (username and email).

Request Body: { userName, email }
Response: { message, status }
POST /deleteUser: Deletes user account.

Response: { message, status }
POST /getOtp: Sends OTP to the user's email for password reset.

Request Body: { email }
Response: { message, status, userOtp }
POST /changePassword: Changes user password using OTP.

Request Body: { password }
Response: { message, status }
Installation and Setup
Clone the repository: git clone <repository-url>
Install dependencies: npm install
Create a .env file and add necessary environment variables (e.g., MongoDB connection string, JWT secret, email credentials).
Start the server: npm start
Usage
Make requests to the defined endpoints using tools like Postman or curl.
Include necessary data (e.g., request body) in the requests.
Handle responses from the server based on the provided status and message.
Conclusion
The User Authentication and Management System provides essential functionality for managing user accounts in an e-commerce website. It ensures secure authentication, allows users to update their information, and provides options for password reset and account deletion. Additionally, it incorporates features for sending OTPs and welcome emails to users, enhancing the overall user experience.

This documentation aims to provide a comprehensive overview of the system, including its features, endpoints, and usage instructions. If you have any further questions or need additional assistance, please feel free to ask.
