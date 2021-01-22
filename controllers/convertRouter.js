const convertRouter = require('express').Router()
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const mime = require('mime-types')
const { deleteFile } = require('../utils/misc')
const { csv2jsonConvert, json2csvConvert, imgConvertor } = require('../utils/convertorFn')
const svg2img = require('svg2img')

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
  // const { mimetype } = req.file
  const filePath = req.file.path
  if (from == 'csv' && to == 'json') {
    var returnedFile = await csv2jsonConvert(path.join(__dirname, '..', filePath))
  } else if (from === 'json' && to === 'csv') {
    var returnedFile = await json2csvConvert(require(`../${filePath}`), filePath)
  }

  let split = returnedFile.split(/[\\|/]/g)

  return res.json({ returnedFile, fileName: split[split.length - 1], mimetype: mime.lookup(returnedFile) })
},
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  })

convertRouter.post('/delete', async (req, res, next) => {
  await deleteFile(req.body.path)
  res.json({ 'message': 'user files deleted from server. :) We don\'t store any user files. They are all deleted after conversion.' })
})


// testing svg to png and jpg
convertRouter.post('/image', upload.single('image'), async (req, res, next) => {
  const filePath = req.file.path
  const from = req.body.from
  const to = req.body.to

  // img quality options

  const options = {}

  const returnedFile = await imgConvertor(filePath,from, to, options)

  let split = returnedFile.split(/[\\|/]/g)

  return res.json({ returnedFile, fileName: split[split.length - 1], mimetype: mime.lookup(returnedFile) })

})

// test endpoint

module.exports = convertRouter
