const router = require('koa-router')()
const Person = require('../dbs/models/person')

// redis
const Redis = require('koa-redis')
const Store = new Redis().client

router.prefix('/users') // 路由前缀

router.get('/', function(ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function(ctx, next) { // 定位到 http://localhost:3000/users/bar 路由
  ctx.body = 'this is a users/bar response' // 返回接口结果
})

// 增加数据
router.post('/addPerson', async(ctx, next) => {
  const person = new Person({
    name: ctx.request.body.name, // ctx.request 是 ctx 经过封装的请求对象
    age: ctx.request.body.age
  })
  let code
  try {
    await person.save() // save: 增加数据
    code = 0
  } catch (error) {
    code = -1
  }
  ctx.body = {
    code: code
  }
})

// 查询数据
router.post('/getPerson', async(ctx, next) => {
  const result = await Person.findOne({ // findOne: 找出一条
    name: ctx.request.body.name
  })
  const results = await Person.find({ // find: 找出所有
    name: ctx.request.body.name
  })
  ctx.body = {
    code: 0,
    result,
    results
  }
})

// 修改数据
router.post('/updatePerson', async function(ctx) {
  const result = await Person.where({ // where: 定位数据
    name: ctx.request.body.name
  }).update({ // update: 修改数据
    age: ctx.request.body.age
  })
  ctx.body = {
    code: 0,
    result
  }
})

// 删除数据
router.post('/removePerson', async function(ctx) {
  const result = await Person.where({
    name: ctx.request.body.name
  }).remove()
  ctx.body = {
    code: 0,
    result
  }
})

// hget fix name 不经过 session 直接读取 redis
router.get('/fix', async(ctx, next) => {
  const st = await Store.hset('fix', 'name', Math.random()) // key, k-v
  ctx.body = {
    code: 0,
    st
  }
})

module.exports = router
