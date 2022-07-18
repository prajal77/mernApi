const express = require('express');
const app = express();
const userRoutes = require('./user.routes');
const brandRoutes = require('./brand.routes');
const bannerRoutes = require('./banner.routes');
const categoryRoutes = require('./category.routes');
const orderRoutes = require('./order.routes');
const productsRoutes = require('./products.routes')
const authRoutes = require('./auth.routes');

// base url: http://localhost:3005/api/vi
app.use(authRoutes);


app.use('/user', ((req, res, next) => {
    // console.log('here');
    req.dir = 'public/uploads/user'
    // compelte cycle
    next();
}), userRoutes);

// pre defining path to upload file
app.use('/brand', ((req, res, next) => {
    req.dir = '/public/uploads/brand'
    // compelte cycle
    next();
}), brandRoutes);

app.use('/banner', ((req, res, next) => {
    req.dir = '/public/uploads/banner'

    next();
}), bannerRoutes);

app.use('/category', ((req, res, next) => {
    req.dir = '/public/uploads/category'
    next();
}), categoryRoutes);

app.use('/order', ((req, res, next) => {
    req.dir = '/public/uploads/order'
    next();
}), orderRoutes);


app.use('/products', ((req, res, next) => {
    req.dir = '/public/uploads/products'
    next();
}), productsRoutes);



module.exports = app; 