const router = require('express').Router();


router.route('/')
    .get((res, req, next) => {
        console.log(req.dir);
        res.json({
            result: req.dir,
            msg: "Fetched Data",
            status: true
        })

    })
    .post((res, req, next) => {

    });

router.route(':/id')
    .get((req, res, next) => {

    })
    .post((req, res, next) => {

    })
    .put((req, res, next) => {

    })
    .delete((req, res, next) => { })

module.exports = router;
