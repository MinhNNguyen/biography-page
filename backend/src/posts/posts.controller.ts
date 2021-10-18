import { Controller, Post, Body } from "@nestjs/common";
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
}