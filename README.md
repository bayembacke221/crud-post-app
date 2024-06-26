# crud-post-app 

## Description🎉🎉
### Backend API est un service RESTful qui permet aux utilisateurs de créer, lire, mettre à jour et supprimer des articles. L'API est construite en utilisant Node.js, Express.js et MySQL.
## Installation
### 1. Clone the repository
```bash
git clone https://github.com/bayembacke221/crud-post-app.git
```

### 3. Install the dependencies🚀🚀
```bash
npm install 
```
### 3. Creation d'un fichier db.js a la racine du projet et ajouter les configurations suivantes
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


### Frontend app est une application Angular qui permet aux utilisateurs de créer, lire, mettre à jour et supprimer des articles.

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


