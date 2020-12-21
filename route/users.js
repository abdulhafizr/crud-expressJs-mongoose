const express = require('express');
const router = express.Router();
const User = require('../db/user');

router.get("/users", async (request, response) => {
    const users = await User.find({}).then((res) => res);
    response.json(users);
})

router.post('/users', (request, response) => {
    const {name, email, password} = request.body;
    User.create({
        name: name,
        email: email,
        password: password
    }, (err, res) => {
        if(err) return console.log(err);
        response.json(res);
    })
})

router.get('/users/:userId', async (request, response) => {
    const userId = request.params.userId;
    const result = await User.findOne({_id: userId}).then((res) => res);
    response.json(result);
})

router.put('/users/:id', (request, response) => {
    const {id, name, email, password} = request.body;
    User.updateOne({id}, {
        name,
        email,
        password
    }, (err, res) => {
        if(err) return console.log(err);
        response.json(res);
    })
})

router.delete('/users/:userId', async (request, response) => {
    const _id = request.params.userId;
    const result = await User.deleteOne({_id}).then(res => res);
    response.json(result)
})

module.exports = router;