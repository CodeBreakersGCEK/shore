const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const verify = require('../utils/User/verifyToken');

// User can Update their complete profile
router.put('/:id',verify, async (req, res) => {
    try{
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashedPassword;
        }
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        if (!user) return res.status(404).send('The user with the given ID was not found.');
        res.send(user);
    }catch(err){
        res.status(400).send(err);
    }
});
// User can update a particular field of their account
router.patch('/:id',verify, async (req, res) => {
    try{
        if(req.body.password){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);
            req.body.password = hashedPassword;
        }
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        if (!user) return res.status(404).send('The user with the given ID was not found.');
        res.send(user);
    }catch(err){
        res.status(400).send(err);
    }
    
});

module.exports = router;