import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { PostsService } from "./posts.service";
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPost(
    @Body() completeBody: {
     title: string,
     description: string, 
    }): Promise<object> {
    const {title, description} = completeBody
    const generatedId = await this.postsService.createPost(title, description)
    return {
      id: generatedId
    }
  }

  @Get()
  async getPosts(): Promise<Array<object>> {
    const posts = await this.postsService.getPosts()
    return posts.map(post => ({
      id: post.id,
      title: post.title,
      description: post.description,
      updated_at: post.updated_at,
      created_at: post.created_at,
      comments: post.comments,
    }))
  }

  @Get(':id')
  async getPost(@Param('id') postId: string) {
    const post = await this.postsService.getPostById(postId)
    return post
  }

  @Patch(':id')
  async updatePost(
    @Param('id') postId: string,
    @Body() completeBody: {
     title: string,
     description: string, 
    }) {
    const {title, description} = completeBody
    const post = await this.postsService.updatePost(postId, title, description)
    return post
  }

  @Delete(':id')
  async removePost(
    @Param('id') postId: string,
  ) {
    await this.postsService.removePost(postId)
    return null
  }
}