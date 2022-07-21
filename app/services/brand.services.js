const db = require('./mongodb.service');

class BrandServices {
    addBrandvalidation = (data) => {
        let errMsg = {};
        if (!data.name) {
            errMsg.name = 'name is required '
        }
        if (!data.status) {
            errMsg.status = "Status is required"
        } else if (data.status !== 'active' && data.status !== "inactive");

        if (Object.keys(errMsg).length > 0) {
            throw { status: 400, msg: errMsg }
        } return null;
    };
    addBrand = async (data) => {
        try {
            let dbSel = await db();
            let ak = await dbSel.collection('brands').insertOne(data);
            // console.log(brand);
            if (ak) {
                return ak;
            } else {
                throw { status: 400, msg: 'Error creating Brand' }
            }
        }
        catch (err) {
            throw err;
        }
    }

    getAllBrands = async () => {
        let selDb = await db();

        return selDb.collection('brands').find().toArray();

    }




}

module.exports = BrandServices;