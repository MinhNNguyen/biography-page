import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

// TODO: use environment variable to save the access information to the database.
@Module({
  imports: [
    PostsModule,
    MongooseModule.forRoot(
      'mongodb+srv://robert:qz8nmKLAwdVHAyCl@biography-db.uroio.mongodb.net/bio-page?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
