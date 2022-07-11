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

    //CHECK IF USERNAME ALREADY TAKEN
    const usernameExist = await User.findOne(
        {userName: req.body.userName}
    );
    if (usernameExist){
        return  res.status(400).send("Username already taken.!!\nPlease try another username.")
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
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

router.post('/login', async (req, res) => {
    // VALIDATE A DATA BEFORE LOGIN
    const { error } = loginValidation(req.body);
    if (error){
        return res.status(400).send(error.details[0].message);
    } 
    // CHECK IF USER EXISTS USING EMAIL
    if(req.body.email){
        var user = await User.findOne(
            {email: req.body.email}
        );
        if ( !user ){
            return  res.status(400).send("User with Email doesnot Exists.!!")
        } 
    }
    else if(req.body.userName){
        var user = await User.findOne(
            {userName: req.body.userName}
        );
        if ( !user ){
            return  res.status(400).send("User with Username doesnot Exists.!!")    
        }
    }
    
    // CHECK IF PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass){
        return  res.status(400).send("Invalid Password.!!")
    }

    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    res.header('auth-token', token);
    res.json({
        token: token,
        user: user
    });
})


module.exports = router;