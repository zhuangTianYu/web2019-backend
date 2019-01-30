const Router = require('koa-router')
const router = new Router()

const { article } = require('../module')

router
  .get('/article/list/:type', article.list)
  .get('/article/detail/:id', article.detail)

module.exports = router
