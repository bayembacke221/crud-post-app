const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('express-async-errors');
const cors = require('cors');
const db = require('./db');
const postRoutes = require('./routes/post.routes'); // Importer les routes pour les posts
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));

// Routes
app.use('/api/posts', postRoutes); // Utiliser les routes pour les posts

// Gestion des erreurs
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send('Something went wrong!');
});

// Démarrer le serveur
db.query("SELECT 1")
    .then(() => {
        console.log('db connection succeeded.');
        app.listen(PORT, () => console.log(`Server started at ${PORT}`));
    })
    .catch(err => console.log('db connection failed. \n' + err));