const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Hello Aditya, from SSJCOE's server`);
});

router.post('/register', (req, res) => {
    const { name, email, password, cpassword } = req.body;

    if(!name || !email || !password || !cpassword){
        return res.status(422).json({error: "Please fill all the details properly"});
    }

});

module.exports = router;