const list = require('./query/list')
const detail = require('./query/detail')
const write = require('./query/write')
const comment = require('./query/comment')

const article = { list, detail, write, comment }

module.exports = article
