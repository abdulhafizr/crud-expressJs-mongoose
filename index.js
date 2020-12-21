const express = require('express');
const app = express();
const users = require('./route/users');
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.send("Beranda");
})

// users route
app.use(users);

app.get('/about', (request, response) => {
    response.send("About me")
})

app.listen(port, () => {
    console.log("Server is running!");
})