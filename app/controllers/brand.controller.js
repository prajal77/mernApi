const BrandServices = require('../services/brand.services');
const db = require('../services/mongodb.service');


class BrandController {
    constructor() {
        this.brandSvc = new BrandServices();
    }

    addBrand = async (req, res, next) => {
        try {
            let data = req.body;
            // console.log(req.body);
            if (req.file) {
                data.image = req.file.filename;
            }
            console.log(data);
            this.brandSvc.addBrandvalidation(data);
            let ack = await this.brandSvc.addBrand(data);
            res.json({
                result: data,
                status: true,
                msg: 'brand created successfully'
            })
        }

        catch (error) {
            next(error)
        }
    }
    getAllBrand = async (req, res, next) => {
        try {
            let allBrand = await this.brandSvc.getAllBrands();
            res.json({
                result: allBrand,
                status: true,
                msg: "All Brand feteched successfully"
            })
        } catch (error) {
            next(error);
        }

    }

}

module.exports = BrandController;