import Router from 'koa-router'
// import Config from '../dbs/config'
// import axios from './utils/axios'
import Province from '../dbs/models/province'
import Menu from '../dbs/models/menu'
import City from '../dbs/models/city'
import Positon from '../dbs/models/position'

const router = new Router({
  prefix: '/geo'
})
// const sign = Config.sign

// [postman](http://localhost:3000/geo/getPosition)
router.get('/getPosition', async ctx => {
  const result = await Positon.findOne() // 操作本地数据库
  ctx.body = {
    province: result.province,
    city: result.city
  }
  // 线上服务
  // const {
  //   status,
  //   data: { province, city }
  // } = await axios.get(`${Config.requestUrl}/geo/getPosition?sign=${sign}`)
  // if (status === 200) {
  //   ctx.body = {
  //     province,
  //     city
  //   }
  // } else {
  //   ctx.body = {
  //     province: '',
  //     city: ''
  //   }
  // }
})

// [postman](http://localhost:3000/geo/menu)
router.get('/menu', async ctx => {
  const result = await Menu.findOne() // 操作本地数据库
  ctx.body = {
    menu: result.menu
  }
  // 线上服务
  // const {
  //   status,
  //   data: { menu }
  // } = await axios.get(`${Config.requestUrl}/geo/menu?sign=${sign}`)
  // if (status === 200) {
  //   ctx.body = {
  //     menu
  //   }
  // } else {
  //   ctx.body = {
  //     menu: []
  //   }
  // }
})

// [postman](http://localhost:3000/geo/province)
router.get('/province', async ctx => {
  const result = await Province.find() // 操作本地数据库
  ctx.body = {
    province: result.map(item => {
      return {
        id: item.id,
        name: item.value[0]
      }
    })
  }
  // 线上服务
  // const {
  //   status,
  //   data: { province }
  // } = await axios.get(`${Config.requestUrl}/geo/province?sign=${sign}`)
  // ctx.body = {
  //   province: status === 200 ? province : []
  // }
})

// http://localhost:3000/geo/province/110000
router.get('/province/:id', async ctx => { // 获取对应省份城市
  const result = await City.findOne({ id: ctx.params.id }) // 操作本地数据库
  ctx.body = {
    code: 0,
    city: result.value.map(item => {
      return { province: item.province, id: item.id, name: item.name }
    })
  }
  // 线上服务
  // const {
  //   status,
  //   data: { city }
  // } = await axios.get(
  //   `${Config.requestUrl}/geo/province/${ctx.params.id}?sign=${sign}`
  // )
  // if (status === 200) {
  //   ctx.body = {
  //     city
  //   }
  // } else {
  //   ctx.body = {
  //     city: []
  //   }
  // }
})

// [postman](http://localhost:3000/geo/city)
router.get('/city', async ctx => {
  const result = await City.find() // 操作本地数据库
  ctx.body = {
    city: result.map(item => {
      return {
        value: item.value
      }
    })
  }
  // 线上服务
  // const {
  //   status,
  //   data: { city }
  // } = await axios.get(`${Config.requestUrl}/geo/city?sign=${sign}`)
  // if (status === 200) {
  //   ctx.body = {
  //     city
  //   }
  // } else {
  //   ctx.body = {
  //     city: []
  //   }
  // }
})

// [postman](http://localhost:3000/geo/city)
router.get('/hotCity', async ctx => {
  const result = await City.find() // 操作本地数据库 bug! 没有返回完全的城市名
  ctx.body = {
    city: result.map(item => {
      const value = item.value
      const valueArray = [...value]
      return {
        value: valueArray
      }
    })
  }
  // 线上服务
  // const {
  //   status,
  //   data: { hots }
  // } = await axios.get(`${Config.requestUrl}/geo/hotCity?sign=${sign}`)
  // if (status === 200) {
  //   ctx.body = {
  //     hots
  //   }
  // } else {
  //   ctx.body = {
  //     hots: []
  //   }
  // }
})

export default router
