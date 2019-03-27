const mongoose = require('mongoose')
const personSchema = new mongoose.Schema({ // 建表
  name: String,
  age: Number
})

module.exports = mongoose.model('Person', personSchema) // 建模型
