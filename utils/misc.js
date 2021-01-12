const fs = require('fs')

const deleteFile = async (path) => {
  try {
    await fs.unlink(path, (err) => {
      if(err) {
        console.log(err)
        return
      }
    })
  } catch(e) {
    console.log(e.message)
  }
}

module.exports = {
  deleteFile
}