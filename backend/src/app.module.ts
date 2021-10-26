import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

// TODO: use environment variable to save the access information to the database.

@Module({
  imports: [PostsModule, MongooseModule.forRoot(process.env.MONGO_DB_ACCESS)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
