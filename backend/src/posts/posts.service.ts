import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { Post } from './post.model'

@Injectable
export class PostsService {
  posts: Post[] = [];

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
}