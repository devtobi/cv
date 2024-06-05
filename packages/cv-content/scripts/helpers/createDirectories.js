const path = require('path')
const fs = require('fs')
const getFiles = require('./getFiles.js')
const { DATA_DIRECTORY, DIST_DIRECTORY } = require('./constants.js')

const createDirectories = () => {
  const files = getFiles(DATA_DIRECTORY)
  files.forEach((file) => {
    const dirname = `${DIST_DIRECTORY}/${path.parse(file).name}`
    try {
      fs.mkdirSync(dirname, { recursive: true })
    } catch (err) {
      console.error('Error creating directory:', err)
    }
  })
}

module.exports = createDirectories
