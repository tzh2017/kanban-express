import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  userName: String,
  avatar: String,
  mobile: String,
  delete: { type: Boolean, default: false },
  updateTime: { type: Date, default: Date.now },
  createTime: { type: Date, default: Date.now }
})

/**
 * @typedef User
 * @property {string} _id - 唯一id
 * @property {string} userName.required - 用户名
 * @property {string} avatar - 头像
 */
export const User = model('User', userSchema)
