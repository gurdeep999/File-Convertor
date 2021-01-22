const convertRouter = require('express').Router()
const multer = require('multer')
const path = require('path')
const mime = require('mime-types')
const { deleteFile } = require('../utils/misc')
const { csv2jsonConvert, json2csvConvert, imgConvertor } = require('../utils/convertorFn')


// saves the file
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './clientFiles/uploads')
    },
    filename(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  }),
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(csv|json|svg)$/)) {
      return cb(
        new Error(
          'only upload files with csv, json, svg format'
        )
      )
    }
    cb(null, true)
  }
})





convertRouter.post('/file', upload.single('file'), async (req, res, next) => {
  console.log(req.file.mimetype, req.file.path, req.body.from, req.body.to)
  const { from, to } = req.body
  // let returnedFile = ''
  // const { mimetype } = req.file
  const filePath = req.file.path
  if (from == 'csv' && to == 'json') {
    var returnedFile = await csv2jsonConvert(path.join(__dirname, '..', filePath))
  } else if (from === 'json' && to === 'csv') {
    var returnedFile = await json2csvConvert(require(`../${filePath}`), filePath)
  } else if (from === 'svg') {
    const options = {}
    var returnedFile = await imgConvertor(filePath, from, to, options)
  }
  // let split = returnedFile.split(/[\\|/]/g)

  return res.json({ fileName: path.basename(returnedFile), mimetype: mime.lookup(returnedFile) })
},
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  })

convertRouter.get('/download/:name', async (req, res, next) => {
  const fileName = req.params.name
  const directoryPath = __basedir + '/clientFiles/converts/'
  const filePath = directoryPath + fileName
  res.set({
    'Content-Type': mime.lookup(filePath)
  })
  return res.sendFile(filePath, async (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    } else {
      await deleteFile(filePath)
    }
  })
})

module.exports = convertRouter
