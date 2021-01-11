const convertRouter = require('express').Router()
const multer = require('multer')
const path = require('path')
const jsonConvertor = require('json-2-csv')
const fs = require('fs')

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
    if(!file.originalname.match(/\.(csv|json)$/)) {
      return cb(
        new Error(
          'only upload files with csv, json format'
        )
      )
    }
    cb(null,true)
  }
})

const json2csvConvert = (file, filePath) => {
  const destFile = path.join(__dirname, '..', 'clientFiles', 'converts', path.basename(filePath, '.json')) + '.csv'
  jsonConvertor.json2csvAsync([file], {
    delimiter: {
      wrap: '"', // Double Quote (") character
      field: ',', // Comma field delimiter
      eol: '\n' // Newline delimiter
    },
    prependHeader: true,
    sortHeader: false,
    excelBOM: true,
    trimHeaderValues: true,
    trimFieldValues: true,
    unwindArrays: true
  })
    .then(csv => {
      fs.writeFile(destFile, csv, err => {
        if (err) {
          console.error(err)
          return
        }
      })
    })
    .catch(err => console.log(err.message))
}

const csv2jsonConvert = async (filePath) => {
  const destFile = path.join(__dirname, '..', 'clientFiles', 'converts', path.basename(filePath, '.csv')) + '.json'
  const writeStream = fs.createWriteStream(destFile)

  await fs.readFile(filePath, 'utf-8', (err, data) => {

    jsonConvertor.csv2jsonAsync(data, {
      delimiter: {
        wrap: '"', // Double Quote (") character
        field: ',', // Comma field delimiter
        eol: '\n' // Newline delimiter
      },
      prependHeader: true,
      sortHeader: false,
      excelBOM: true,
      trimHeaderValues: true,
      trimFieldValues: true,
    })
      .then(json => {
        const stringifiedJson = JSON.stringify(json, null, 2)
        writeStream.write(stringifiedJson)
        writeStream.end()
      })
      .catch(err => console.log(err.message))
  })
  return destFile
}

convertRouter.post('/', upload.single('file'), async (req, res, next) => {
  console.log(req.file.mimetype, req.file.path, req.body.from, req.body.to)
  const { from, to } = req.body
  const { mimetype } = req.file
  const filePath = req.file.path
  if (from == 'csv' && to == 'json') {
    const returnedFile = await csv2jsonConvert(path.join(__dirname, '..', filePath))
    console.log(returnedFile)
    return res.download(returnedFile, 'convertedFile.json',(err) => {
      if(err){
        console.log(err)
      } else {
        console.log('else')
      }
    })
  } else if (from === 'json' && to === 'csv') {
    await json2csvConvert(require(`../${filePath}`), filePath)
  }
  res.send('file uploaded')
},
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  })

module.exports = convertRouter
