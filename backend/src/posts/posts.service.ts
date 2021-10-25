import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { Post } from './post.model'
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
@Injectable()
export class PostsService {
  private posts: Post[] = [];

  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  private async findPost(id: string): Promise<Post> {
    let post 
    try {
      post = await this.postModel.findById(id)
    } catch (error) {
      throw new NotFoundException('Could not find post.')
    }
    if (!post) {
      throw new NotFoundException('Could not find post.')
    }
    return post
  }

  async createPost(title: string, description: string) {
    const currentDateTime =  new Date().toString()
    const postId = uuidv4()
    const newPost = new this.postModel({
      title,
      description,
      created_at: currentDateTime,
      updated_at: currentDateTime,
      comments: []
    })
    const result = await newPost.save()
    return result.id as string;
  }

  async getPosts() {
    const posts = await this.postModel.find().exec()
    return posts;
  }

  async getPostById(selectedId: string) {
    const post = await this.findPost(selectedId)
    if (!post) {
      throw new NotFoundException('Could not find post.')
    }
    return {
      id: post.id,
      title: post.title,
      description: post.description,
      updated_at: post.updated_at,
      created_at: post.created_at,
      comments: post.comments,
    }
  }

  async updatePost(selectedId: string, title: string, description: string) {
    const updatedPost = await this.findPost(selectedId)
    if (title) {
      updatedPost.title = title
    }
    if (description) {
      updatedPost.description = description
    }
    updatedPost.updated_at = new Date().toString()
    updatedPost.save()
    return updatedPost
    return {}
  }

  async removePost(selectedId: string) {
    const result = await this.postModel.deleteOne({_id: selectedId}).exec()
    if (result.deletedCount === 0) {
      throw new NotFoundException('Could not find product.')
    }
    return result
  }
}