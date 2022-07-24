const express = require('express');
const app = express();
const http = require('http')
const socketServer = http.createServer(app)
require('./app/services/mongooes.services')

const routes = require('./routes/routes')
const { Server } = require('socket.io');
const io = new Server(socketServer);


app.use(express.json()); //applicaiton/json
app.use(express.urlencoded({ extended: false }));
// multipart/form-data
const myEvent = require('./app/events/myevents.events')

io.on('connection', (socket) => {
    // emit event -send-message
    socket.on('send-message', (data) => {
        console.log("chat Massage:", data);
    })
})

// event call
// myEvent.emit('eventName', { key: 'value' });

app.use((req, res, next) => {
    req.myEvent = myEvent;
    next();
})

// for static files
console.log(process.cwd() + '/public');
app.use(express.static(process.cwd() + '/public'))
app.use('/images', express.static(process.cwd() + '/public/uploads'))

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
    console.log("error", error);
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