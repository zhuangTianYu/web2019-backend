const Koa = require('koa')
const app = new Koa()

const Cors = require('koa2-cors')
const cors = new Cors()

const BodyParser = require('koa-bodyparser')
const bodyParser = new BodyParser()

const router = require('./router')

app
  .use(cors)
  .use(bodyParser)
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(1995)
