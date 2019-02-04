const fs = require('fs')
const date = require('../../../util/date.format')
const query = require('../../../util/query')

const write = async (ctx, next) => {
  // 获取 post params
  const params = ctx.request.body

  // 声明保存 json 文件的 id
  let id
  // 查询 article 表的下一条记录的 id
  await query('select max(id) from article', result => {
    id = result[0]['max(id)'] === null
      ? 1
      : result[0]['max(id)'] + 1
    next()
  })

  // 插入 article 表
  const { title, author, type } = params
  const createTime = date()
  const insertSql = `
    insert into article
    (title, author, type, comment, createTime)
    values
    ("${title}", "${author}", ${type}, 0, "${createTime}")
  `
  await query(insertSql, result => {
    // 获取文章的 json 串
    const article = JSON.stringify(params)
    // 写 json 文件
    fs.writeFile(`file/article-${id}.json`, article, error => {
      if (error !== null) { throw error }
    })
    ctx.body = { success: true }
  })
}

module.exports = write
