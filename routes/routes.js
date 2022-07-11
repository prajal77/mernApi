const express = require('express');

const app = express();

// base url: http://localhost:3005/api/vi

const homeContent = (req, res) => {
    res.json({
        result: "Home page Content",
        msg: 'Success',
        status: true
    })
};

// app.use((req, res) => {
//     // alwayss execute
// });

// app.use("/about", (req, res) => {
//     // executes only when your url is /about 
// })

app.post('/product/add', (req, res) => {
    // this action can only be performed by logged in admin user
    // login check true
    // role=> admin 
    res.status(403).json();

})

app.use('/product/add', (req, res) => {
    // 405 method not allowed
    res.status(405).json({
        result: null,
        msg: "here",
        status: false
    })
})

app.get('/product/:slug', (req, res) => {
    // fatch the value from parameter
    // let slug = req.params.slug;
    res.json({
        result: {
            param: req.params,
            query: req.query//after param '?'

        },
        msg: "Body",
        status: true
    })

})


// url mount
app.get('/', homeContent);



module.exports = app; 