const uploader = require('../app/middleware/uploader.middleware');

const router = require('express').Router();

// /brand => get => list all brands
// /brand => post => to create a brand
// /brand/:id => get => Detail of a brand
// /brand/:id => put/patch => update a brand
// /brand/:id => delete => Delete a brand

router.route('/')
    .get((req, res, next) => {
        console.log(req.dir);
        res.json({
            result: req.dir,
            status: true,
            msg: "Fetched data"
        })

    })
    .post((req, res, next) => {
        req.dir = "public/uploads/brand"
        next();
    }, uploader.single('image'),
        (req, res, next) => {
            res.json({
                result: req.body,
                status: true,
                msg: "Success"
            })
        })

router.route('/:id')
    .get((req, res, next) => {

    })
    .post((req, res, next) => {

    })
    .put((req, res, next) => {

    })
    .delete((req, res, next) => {
    });
module.exports = router;