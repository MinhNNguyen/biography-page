import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProfileSchema } from './profile.model';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Profile', schema: ProfileSchema }]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
