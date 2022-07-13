const express = require('express');

const app = express();
const userRoutes = require('./user.routes');
const brandRoutes = require('./brand.routes')

// base url: http://localhost:3005/api/vi
app.use('/user', ((req, res, next) => {
    req.dir = '/public/uploads/users'
    // compelte cycle
    next();
}), userRoutes);

// pre defining path to upload file
app.use('/brand', ((req, res, next) => {
    req.dir = '/public/uploads/brand'
    // compelte cycle
    next();
}), brandRoutes);


module.exports = app; 