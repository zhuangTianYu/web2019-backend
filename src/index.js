const Koa = require('koa')
const app = new Koa()
const router = require('./router')

app.use(router.routes())
app.listen(1995)
