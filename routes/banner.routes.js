const router = require('express').Router();

// CRUD ==> title,status, image,link
router.route('/')
    .get((req, res, next) => {
        console.log(req.dir);
        res.json({
            result: req.dir,
            status: true,
            msg: 'fetched data'
        })

    })
    .post((req, res, next) => {
    })

router.route('/:id')
    .get((req, res, next) => { })
    .post((req, res, next) => { })
    .put((req, res, next) => { })
    .delete((req, res, next) => { })

module.exports = router;
