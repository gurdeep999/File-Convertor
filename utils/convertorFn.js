const path = require('path')
const fs = require('fs')
const { deleteFile } = require('./misc')
const jsonConvertor = require('json-2-csv')

const json2csvConvert = async (file, filePath) => {
  const destFile = path.join(__dirname, '..', 'clientFiles', 'converts', path.basename(filePath, '.json')) + '.csv'
  await jsonConvertor.json2csvAsync([file], {
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
    .then(data => {
      deleteFile(filePath)
    })
    .catch(err => console.log(err.message))
  return destFile
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
      .then(data => {
        deleteFile(filePath)
      })
      .catch(err => console.log(err.message))
  })
  return destFile
}

module.exports = {
  json2csvConvert, csv2jsonConvert
}