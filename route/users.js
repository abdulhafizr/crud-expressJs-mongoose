const express = require('express');
const router = express.Router();
const User = require('../db/user');

router.get("/users", async (request, response) => {
    const users = await User.find({}).then((res) => res);
    if(users.length > 0) {
        response.json({
            status: true,
            data: users,
            method : request.method,
            url: request.url
        });
    }else{
        response.json({
            status: false,
            message: "users is empty"
        })
    }
})

router.post('/users', async (request, response) => {
    const {name, email, password} = request.body;
    const result = await User.create({ name: name, email: email, password: password }).then((res) => res);
    response.json({
        status: true,
        data: result,
        message: "data created successfully",
        method: request.method,
        url: request.url
    })
})

router.get('/users/:name', async (request, response) => {
    const name = request.params.name;
    const results = await User.find({name: name}).then((res) => res);
    if(results.length > 0) {
        response.json({
            status: true,
            data: results,
            method : request.method,
            url: request.url
        });
    }else{
        response.json({
            status: false,
            message: "data not found",
            method: request.method,
            url: request.url
        });
    }
})

router.put('/users/:id', async (request, response) => {
    const {id, name, email, password} = request.body;
    const result = await User.updateOne({id}, { name, email, password }).then((res) => res);
    if(result.ok) {
        response.json({
            status: true,
            message: "data has updated",
            method: request.method,
            url: request.url
        });
    }else{
        response.json({
            status: false,
            message: "data not updated",
            method: request.method,
            url: request.url
        });
    }
})

router.delete('/users/:userId', async (request, response) => {
    const _id = request.params.userId;
    const result = await User.deleteOne({_id}).then(res => res);
    if(result.ok) {
        response.json({
            status: true,
            message: "data has deleted",
            method: request.method,
            url: request.url
        });
    }else{
        response.json({
            status: false,
            message: "data not deleted",
            method: request.method,
            url: request.url
        });
    }
})

module.exports = router;