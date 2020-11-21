import { Schema, model } from 'mongoose'

const projectScheme = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  type: String,
  ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
  updateTime: { type: Date, default: Date.now },
  createTime: { type: Date, default: Date.now }
})
export const Project = model('Project', projectScheme)
