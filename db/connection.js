const mongoose = require('mongoose');

const adminUsername = process.env.ADMIN_USERNAME;
const adminPassword = encodeURIComponent(process.env.ADMIN_PASSWORD);
const DB = `mongodb+srv://${adminUsername}:${adminPassword}@cluster0.h5gk0cc.mongodb.net/ssjcoeit-db?retryWrites=true&w=majority`;

mongoose.connect(DB).then(() => {
    console.log(`Database Connected`);
}).catch((err) => console.log(`Database Connection Failed`, err));