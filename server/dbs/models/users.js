import mongoose from 'mongoose'

const Schema = mongoose.Schema // Schema: 表的描述
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
})

export default mongoose.model('User', UserSchema) // model 建模型
