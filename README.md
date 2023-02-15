# Goals Generator App

App to generate and store goals on a remote database and display them on a dashboard. 
There is a minimal register interface that requires your full name, email and password. 
After that, you can login and start saving, updating or deleteing your goals.

It contains the following pages:

    - Dashboard
    - Register / Sign up
    - Login / Sign In
    
## Technologies used

    - Node & Express
    - MongoDB
    - JWT
    - React
    - Redux
    
## Setup

This project requires the following dependecies:

    "bcryptjs": "^2.4.3"
    "colors": "^1.4.0"
    "dotenv": "^16.0.2"
    "nodemon": "^2.0.19"
    "express": "^4.18.1"
    "express-async-handler": "^1.2.0"
    "jsonwebtoken": "^8.5.1"
    "mongoose": "^6.5.4"
    "nodemon": "^2.0.19"
    "@reduxjs/toolkit": "^1.8.5"
    "@testing-library/jest-dom": "^5.15.0"
    "@testing-library/react": "^9.5.0"
    "@testing-library/user-event": "^7.2.1"
    "axios": "^0.27.2"
    "react": "^17.0.0"
    "react-dom": "^17.0.0"
    "react-icons": "^3.11.0"
    "react-redux": "^8.0.2"
    "react-router-dom": "^6.3.0"
    "react-scripts": "^4.0.3"
    "react-toastify": "^8.1.1"
    
To install the project, just download it directly from terminal with "git clone https://github.com/JEDolce/goals-generator.git", and then run npm install or yarn add.

After installing the project you'll need to create the dabatabase on MongoDB and set the environment variables MONGO_URI with your MongoDB key, NODE_ENV and PORT on the server side.

The project is ready to deploy. In case you want to change it to development, comment rows 25 to 37 in index.js and set NODE_ENV = development



