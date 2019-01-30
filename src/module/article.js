const article = {
  // article list
  list: async ctx => {
    console.log(ctx.params)
    ctx.body = [
      { title: 'title-0', author: 'ming' },
      { title: 'title-1', author: 'ming' }
    ]
  },

  // article detail
  detail: async ctx => {
    console.log(ctx.params)
    ctx.body = { title: 'title-0', content: 'content' }
  }
}

module.exports = article
