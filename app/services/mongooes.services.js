const mongoose = require("mongoose");
const CONFIG = require('../../config/config');

mongoose.connect(CONFIG.DB_URL + '/' + CONFIG.DB_NAME, (err) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Mongodb connected successfully');
    }
});