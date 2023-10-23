const express = require('express');
const router = express.Router();


require('../db/connection');
const User = require("../model/userSchema");


router.get('/', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's server`);
});


// ********** using promises ***************

// router.post('/register', (req, res) => {
//     const { name, email, password, cpassword } = req.body;

//     if(!name || !email || !password || !cpassword){
//         return res.status(422).json({error: "Please fill all the details properly"});
//     }

//     User.findOne({email: email}).then((userExists) => {
//         if(userExists){
//             return res.status(422).json({error: "Email already exists!"});
//         }

//         const user = new User({name, email, password, cpassword})

//         user.save().then(() => {
//             res.status(201).json({message: "User registered successfully"})
//         }).catch((err) => res.status(500).json({error: "Fail to register"})) 

//     }).catch(err => {console.log(err);});

// });



// ********** using async - await **********

router.post('/register', async (req, res) => {
    const { name, email, password, cpassword } = req.body;

    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error: "Please fill all the details properly"});
    }

    try{
        const userExists = await User.findOne({email: email});

        if(userExists){
            return res.status(422).json({error: "Email already exists!"});
        }

        const user = new User({name, email, password, cpassword});
    
        await user.save();

        res.status(201).json({message: "User registered successfully"});
        

    } catch(err) {
        console.log(err);
    }


});

module.exports = router;