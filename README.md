# crud-post-app

## Description
### Backend API for a CRUD post app. The API is built using Node.js, Express.js, and Mysql. The API allows users to create, read, update, and delete posts. The API also allows users to like and dislike posts.

## Installation
### 1. Clone the repository
```bash
git clone https://github.com/bayembacke221/crud-post-app.git
```
### 2. Initialize the project
```bash
npm init
```
### 3. Install the dependencies
```bash
npm install express mysql2 
```

### 4. Install nodemon as a dev dependency
```bash
npm install nodemon --save-dev
```
### Add CORS to the project
```bash
npm install cors
```
### Add BODY PARSER to the project
```bash
npm install body-parser
```
### Add EXPRESS ASYNC ERROR HANDLING to the project
```bash
npm install express-async-errors
```
### 3. Create a .env file in the root directory and add the following environment variables
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=post_db
```
### 4. Create a database in Mysql
```bash
CREATE DATABASE post_db;
```
### 5. Create a table in the database
```bash
CREATE TABLE IF NOT EXISTS  posts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) NOT NULL,
                body TEXT NOT NULL,
                thumbnails VARCHAR(255),
                isPublished VARCHAR(50) DEFAULT 1,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
```


### Frontend app for the API is developed using Angular 17 

### 1. Intall Dependencies
```bash
npm install
```
### 2. Run the app
```bash
ng serve
```
### 3. Open the browser and navigate to http://localhost:4200

### 4. The app allows users to create, read, update, and delete posts. The app also allows users to like and dislike posts.

### 5. The app is built using Angular 17, Angular Material, and Bootstrap.


