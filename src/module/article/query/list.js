const query = require('../../../util/query')

const list = async (ctx, next) => {
  const type = ctx.params.type
  const createTime = 'DATE_FORMAT(createTime, "%Y-%m-%d") as createTime'
  const select = `select id, title, author, comment, ${createTime} from article`
  const where =
    type === '0'
      ? ''
      : `where type = ${type}`
  const order = 'order by createTime'
  const selectSql = `${select} ${where} ${order}`
  await query(selectSql, (result) => {
    ctx.body = result
    next()
  })
}

module.exports = list
