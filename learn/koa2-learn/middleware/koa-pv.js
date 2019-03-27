function pv(ctx) {
  ctx.session.count++ // redis, session: 用户访问多少次
  global.console.log('pv', ctx.path) // ctx.path 路径
}

module.exports = function() {
  return async(ctx, next) => { // ctx: 上下文
    pv(ctx)
    await next() // next(): 下一个中间件
  }
}
