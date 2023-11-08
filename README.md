# Course Management App

This repository contains a Course Management App built with JavaScript, React, and JSON Server. The application allows users to manage courses, including adding new courses, editing existing ones, and deleting courses.

## Prerequisites
- Node.js and npm installed on your system. You can download and install them from [here](https://nodejs.org/).

## Installation

### Step 1: Clone the Repository
Clone the GitHub repository to your local machine using the following command:

        git clone https://github.com/Goutamsahu23/course-management-app


### Step 2: Install Dependencies
Navigate to the project directory and install the required dependencies using npm:

        cd course-management-app
        npm install


### Step 3: Install JSON Server
Install JSON Server globally on your system using the following command:

        npm install -g json-server


### Step 4: Start JSON Server
Start JSON Server and make it watch the `db.json` file on port 5000 with the following command:

        json-server --watch db.json --port 5000


JSON Server will now serve the data for the application.

### Step 5: Start the Application
In a new terminal window, start the React application using the following command:

        npm start


        The application will be accessible at `http://localhost:3000`.




