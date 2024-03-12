const path = require('path')

const glob = require('glob')

const baseDir = path.resolve(__dirname, 'src/')
const targets = glob.sync(`${baseDir}/*.js`)
const entries = {}

const re = new RegExp(baseDir)

targets.forEach(value => {
    ext = path.extname(value)
    
    console.log(path.basename(value, ext))
    
})

// module.exports = {
// }
