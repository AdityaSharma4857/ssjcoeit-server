const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


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



// User registration
// ********** using async - await **********

router.post('/register', async (req, res) => {
    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the details properly" });
    }

    try {
        const userExists = await User.findOne({ email: email });

        if (userExists) {
            return res.status(422).json({ error: "Email already exists!" });
        }
        else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not matching" });
        }
        else {
            const user = new User({ name, email, password, cpassword });

            await user.save();

            res.status(201).json({ message: "User registered successfully" });
        }


    } catch (err) {
        console.log(err);
    }


});


// User login 

router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill all the details" });
        }

        const userLogin = await User.findOne({ email: email });

        // console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials!" });

            } else {
                res.json({ message: "Logged in successfully" });
            }
        } 
        else {
            res.status(400).json({ error: "Invalid credentials!" });
        }



    } catch (err) {
        console.log(err);
    }
})

module.exports = router;