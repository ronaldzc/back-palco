//estructuramos el manejador de archivos 
const multer = require('multer')
const PUBLIC_URL = process.env.PUBLIC_URL 

const storage = multer.diskStorage({
    // destination: './media',
    // destination: `${__dirname}/../media`,
    destination: (req, file, cb) => {
        const pathStorage = `./media`;
        cb(null, pathStorage);
    },

    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        const filename = `file-${Date.now()}.${ext}`
        cb(null, filename)
    }
})

const uploadFile = multer({ storage })


module.exports = uploadFile