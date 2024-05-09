const express = require('express'),
    app = express(),
    bodyparser = require('body-parser');
require('express-async-errors')
cors = require('cors');
const db = require('./db'),
    postRoutes = require('./controllers/post.controller')
const PORT = 3000

//middleware
app.use(bodyparser.json())

app.use(cors({
    origin: 'http://localhost:4200'
}));

//routes
app.use('/api/posts', postRoutes)
app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Something went wrong!')
})


db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(PORT,
            () => console.log(`server started at ${PORT}`))
    })
    .catch(err => console.log('db connection failed. \n' + err))