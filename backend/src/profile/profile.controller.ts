import { Controller, Post, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async createProfile(
    @Body() completeBody: { first_name: string; last_name: string },
  ): Promise<any> {
    const { first_name, last_name } = completeBody;
    const result = await this.profileService.createProfile(
      first_name,
      last_name,
    );
    return result;
  }
}
