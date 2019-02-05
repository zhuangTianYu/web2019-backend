const date = require('../../../util/date.format')
const query = require('../../../util/query')

const comment = async (ctx, next) => {
  // 获取 post params
  const params = ctx.request.body
  const { userName, content, articleID } = params
  const createTime = date()

  // userName 写入 cookie
  // ctx.cookies.set('web2019UserName', escape(userName), cookieConfig)

  // comment 表 insert 数据
  const insertSql = `
    insert into comment
    (articleID, userName, content, createTime)
    values
    (${articleID}, "${userName}", "${content}", "${createTime}")
  `
  await query(insertSql, result => {})

  let commentCount = 0
  // 获取当前 article 的 comment 数量
  const commentSql = `
    select count(*) from comment where articleID = ${articleID}
  `
  await query(commentSql, result => {
    commentCount = result[0]['count(*)']
  })

  // article 表 update comment 数量
  const updateSql = `
    update article set comment = ${commentCount} where id = ${articleID}
  `
  await query(updateSql, result => {
    ctx.body = { success: true }
    next()
  })
}

module.exports = comment
