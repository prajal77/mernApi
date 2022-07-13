const express = require('express');

const app = express();
const routes = require('./routes/routes')

app.use(express.json()); //applicaiton/json
app.use(express.urlencoded({ extended: false }));
// multipart/form-data

// mount routes
app.use('/api/v1', routes);

// 404 page not found
app.use((req, res, next) => {
    // res.status(404).json({
    //     msg: "page not found",
    //     result: null,
    //     status: false
    // })

    next({
        status: 404,
        msg: "not found"
    });
    // next middleware error handling
});

// error handling middlware
app.use((error, req, res, next) => {
    let stausCode = error.status || 500;
    let msg = error.msg || error;
    res.status(stausCode).json({
        msg: msg,
        result: null,
        status: false,
    })
})

app.listen(3005, 'localhost', (err) => {
    if (err) {
        console.log('server is not listening');
    } else {
        console.log('server is listening on port: 3005');
    }
})