import { Controller, Post, Body, Get, Param, Patch, Delete } from "@nestjs/common";
import { PostsService } from "./posts.service";
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  createPost(
    @Body() completeBody: {
     title: string,
     description: string, 
    }): object {
    const {title, description} = completeBody
    const generatedId = this.postsService.createPost(title, description)
    return {
      id: generatedId
    }
  }

  @Get()
  getPosts() {
    const posts = this.postsService.getPosts()
    return posts
  }

  @Get(':id')
  getPost(@Param('id') postId: string) {
    return this.postsService.getPostById(postId)
  }

  @Patch(':id')
  updatePost(
    @Param('id') postId: string,
    @Body() completeBody: {
     title: string,
     description: string, 
    }) {
    const {title, description} = completeBody
    return this.postsService.updatePost(postId, title, description)
  }

  @Delete(':id')
  removePost(
    @Param('id') postId: string,
  ) {
    this.postsService.removePost(postId)
    return null
  }
}