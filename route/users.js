const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.get("/users", userController.index)

router.post('/users', userController.store)

router.get('/users/:name', userController.show)

router.put('/users/:id', userController.update)

router.delete('/users/:userId', userController.delete)

module.exports = router;