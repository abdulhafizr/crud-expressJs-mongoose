const mongoose = require('mongoose');
const User = require('./user');

mongoose.connect('mongodb://localhost:27017/ahr', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected!');
})

module.exports = mongoose;