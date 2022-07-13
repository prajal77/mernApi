
const multer = require('multer');
const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        // console.log(file);
        let path = 'public/uploads';
        cb(null, path)
    },
    filename: (req, file, cb) => {
        //filename.ext
        // console.log(file);
        let filename = Date.now() + "-" + file.originalname;
        cb(null, filename);
    }
})
const imageFilter = (req, file, cb) => {
    // console.log(file);
    let exts = file.originalname.split('.');
    let ext = exts.pop();//last element
    let allowed = ['jpg', 'png', 'gif', 'bmp', 'svg', 'webp', 'jpeg'];
    if (allowed.includes(ext.toLowerCase())) {
        cb(null, true)
    } else {
        cb({
            status: 400,
            msg: "Unsupported file format"
        }, null);
    }
}
const uploader = multer({
    // dest: "public/uploads"
    storage: myStorage,
    fileFilter: imageFilter
});

module.exports = uploader;