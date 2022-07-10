const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    res.send(user);
});

router.patch('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!user) return res.status(404).send('The user with the given ID was not found.');
    res.send(user);
});

model.exports = router;