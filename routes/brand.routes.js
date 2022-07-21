const router = require('express').Router();
const BrandController = require('../app/controllers/brand.controller');

const brandCtrl = new BrandController();
const uploader = require('../app/middleware/uploader.middleware');
// /brand => get => list all brands
// /brand => post => to create a brand
// /brand/:id => get => Detail of a brand
// /brand/:id => put/patch => update a brand
// /brand/:id => delete => Delete a brand

router.route('/')
    .get(brandCtrl.getAllBrand)
    .post((req, res, next) => {
        req.dir = "public/uploads/brand"
        next();
    }, uploader.single('image'),
        brandCtrl.addBrand)

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