const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const withDefaults = require('./utils/default-options')

exports.onPreBootstrap = (_, options) => {
  const { contentPath } = withDefaults(options)

  const dir = path.join(process.cwd(), contentPath)

  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir)
  }
}
