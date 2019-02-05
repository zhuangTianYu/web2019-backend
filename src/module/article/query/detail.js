const fs = require('fs')
const query = require('../../../util/query')

const detail = async (ctx, next) => {
  const id = ctx.params.id
  const createTime = 'DATE_FORMAT(createTime, "%Y-%m-%d") as createTime'
  const select = `select title, author, ${createTime} from article`
  const where = `where id = ${id}`
  const selectSql = `${select} ${where}`

  const body = {}

  const service = new Promise((resolve, reject) => {
    query(selectSql, (result) => {
      const { title, author, createTime } = result[0]
      Object.assign(body, { title, author, createTime })
      // 读取 json 文件
      fs.readFile(`file/article-${id}.json`, (error, data) => {
        if (error !== null) { throw error }
        resolve(data)
      })
    })
  })

  await service.then((data) => {
    const { content, comment } = JSON.parse(data)
    Object.assign(body, { content, comment })
  })

  // 返回数据
  ctx.body = body
}

module.exports = detail
