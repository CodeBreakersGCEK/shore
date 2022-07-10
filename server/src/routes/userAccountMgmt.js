const express = require('express');
const router = express.Router();
const User = require('../models/user');
const verify = require('../utils/User/verifyToken');

router.put('/:id',verify, async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    res.send(user);
});

router.patch('/:id',verify, async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    res.send(user);
});

model.exports = router;