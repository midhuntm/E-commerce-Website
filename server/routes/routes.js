const express = require('express');
const router = express.Router();
const users = require('../models/userSchema');
router.post('/post',async(req,res) => {
    const {name,email,password} = req.body;
    if(!name || !email || !password)
    {
        res.status(422).json('Please Fill the Form');
    }
    else
    {
        try{
            const {name,email,password} = req.body;
            const alreadyUser = await users.findOne({email : email});
            if(alreadyUser)
            {
                res.status(404).json({result : 'This Email already exists'});
            }
            else
            {
                const addUser = new users({
                    name : name,email : email,password : password
                })
                await addUser.save();
                res.status(201).send({users  : addUser  });
            }
            
        }   
        catch(error)
        {
            res.status(410).send(error.message);
        }
    }
})
router.post('/login',async(req,res) => {
    const {email,password} = req.body;
    if(!email,!password) 
    {
        res.status(404).json({result : 'Please Enter the Email & Password'})
    }
    else{
    try
    {
        const alreadyEmail = await users.findOne({email : email});
        const alreadyPassword = await users.findOne({password : password});
        if(alreadyEmail && alreadyPassword)
        {
            res.status(201).json({result : alreadyEmail});
        }
        else
        {
            res.status(422).json({result : 'This Email Doesn\'t have Account'});
        }
    }   
    catch(error)
    {
        res.status(404).json({result:  error.message});
    }
    }
})
router.post('/otp',async(req,res) => {
    const {email} = req.body;
    if(!email) 
    {
        res.status(404).json({result : 'Please enter the email'});
    }
    else
    {
        try{
            const alreadyUser = await users.findOne({email : email});
            // const password = await alreadyUser.password;
            if(alreadyUser)
            {
                res.status(201).json({result : alreadyUser});
            }
            else
            {
                res.status(422).json({result : 'Invalid Email'});
            }
        }
        catch(error)
        {
            res.status(410).json(error.message);
        }
    }
})
router.post('/password',async(req,res) => {
    const {email} = req.body;
    if(!email) 
    {
        res.status(404).json({result : 'Please enter the email'});
    }
    else
    {
        try{
            const alreadyUser = await users.findOne({email : email});
            const password = await alreadyUser.password;
            if(alreadyUser)
            {
                res.status(201).json({result : password});
            }
            else
            {
                res.status(422).json({result : 'Invalid Email'});
            }
        }
        catch(error)
        {
            res.status(410).json(error.message);
        }
    }
})
router.get('/getname/:email',async(req,res) => {
    const {email} = req.params;
    const user = await users.findOne({email : email});
    const name = await user.name;
    if(user)
    {
        res.status(201).json({result : name});
    }
    else
    {
        res.status(422).json({result : 'Error'})
    }

})
router.post('/getuser',async(req,res) => {
    const {email} =req.body;
    const addUser = await users.findOne({email : email});
    if(addUser)
    {   
        res.status(201).json({result : addUser});
    }
    else
    {
        res.status(404).json({result : 'Error'});
    }
})
module.exports = router;