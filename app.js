const express = require('express');

const app = express();
const routes = require('./routes/routes')

// mount routes
app.use('/api/v1', routes);

// 404 page not found
app.use((req, res) => {
    res.status(404).json({
        msg: "page not found",
        result: null,
        status: false
    })
});

app.listen(3005, 'localhost', (err) => {
    if (err) {
        console.log('server is not listening');
    } else {
        console.log('server is listening on port: 3005');
    }
})