const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        result: "Home page Content",
        msg: 'Success',
        status: true
    })
});

app.listen(3005, 'localhost', (err) => {
    if (err) {
        console.log('server is not listening');
    } else {
        console.log('server is listening on port: 3005');
    }

})