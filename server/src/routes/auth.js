const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

const { registerValidation, loginValidation } = require('../utils/User/validation');

router.post('/register', async(req, res) => {
    // VALIDATE A DATA BEFORE ADDING TO DATABASE
    const { error } = registerValidation(req.body);
    if (error){
        return res.status(400).send(error.details[0].message);
    } 

    // CHECK IF USER ALREADY EXISTS
    const emailExist = await User.findOne(
        {email: req.body.email}
    );
    if (emailExist){
        return  res.status(400).send("Email already Exists.!!")
    } 
    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const newUser = await user.save();
        res.send(newUser);
    }catch(err){
        res.status(400).send(err);
    }
})