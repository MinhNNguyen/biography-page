import  * as mongoose from 'mongoose'

export const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  created_at: { type: String, required: true },
  updated_at: { type: String, required: true },
  comments: {type: [{author: String, text: String, created_at: String, updated_at: String}], required: true }
})

export interface Post extends mongoose.Document {
  id: string,
  title: string, 
  description: string, 
  created_at: string, 
  updated_at: string,
  comments: {id: string, author: string, text: string, created_at: string, updated_at: string}[]
}