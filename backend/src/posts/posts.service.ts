import { Injectable, NotFoundException } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { Post } from './post.model'

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  private findPost(id: string): [Post, number] {
    const index = this.posts.findIndex(item => item.id === id)
    if (index === -1) {
      throw new NotFoundException('Could not find post.')
    }
    const post = this.posts[index]
    return [post, index]
  }

  createPost(title: string, description: string) {
    const currentDateTime =  new Date().toString()
    const postId = uuidv4()
    const newPost = new Post(
      postId, 
      title,
      description,
      currentDateTime,
      currentDateTime,
      []
    )
    this.posts.push(newPost)
    return postId
  }

  getPosts() {
    return this.posts.map(item => item)
  }

  getPostById(selectedId: string) {
    const selectedPost = this.findPost(selectedId)[0]
    if (!selectedPost) {
      throw new NotFoundException('Could not find post.')
    }
    return { ...selectedPost }
  }

  updatePost(selectedId: string, title: string, description: string) {
    const [post, index] = this.findPost(selectedId)
    const updatedPost = {...post}
    if (title) {
      updatedPost.title = title
    }
    if (description) {
      updatedPost.description = description
    }
    updatedPost.updated_at = new Date().toString()
    this.posts[index] = updatedPost
    return updatedPost
  }

  removePost(selectedId: string) {
    const index = this.findPost(selectedId)[1]
    this.posts.splice(1)
  }
}