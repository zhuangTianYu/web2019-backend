const query = require('../../../util/query')

const list = async (ctx, next) => {
  await query('select * from article;', (result) => {
    ctx.body = result
    next()
  })
}

module.exports = list
