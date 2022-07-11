const express = require('express');

const app = express();
const userRoutes = require('./user.routes');

// base url: http://localhost:3005/api/vi
app.use('/user', userRoutes);


module.exports = app; 