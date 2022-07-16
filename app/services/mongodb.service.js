const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const CONFIG = require('../../config/config')
// database Server connect
// select data from database server
const db = () => {
    return new Promise((res, rej) => {
        MongoClient.connect(CONFIG.DB_URL, (err, client) => {
            if (err) {
                rej(err);
            } else {
                // select database
                const dbselected = client.db(CONFIG.DB_NAME);
                res(dbselected);
            }

        });
    })

};

module.exports = db;