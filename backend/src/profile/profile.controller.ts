import { Controller, Post, Body, Get, Patch } from '@nestjs/common';
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

  @Get()
  async getProfile(): Promise<any> {
    const result = await this.profileService.getProfile();
    return result;
  }

  @Patch()
  async updateProfile(
    @Body()
    completeBody: {
      first_name: string;
      last_name: string;
      dob: string;
      github_profile: any;
      linkedin_profile_url: string;
      facebook_profile_url: string;
    },
  ): Promise<any> {
    const {
      first_name,
      last_name,
      dob,
      github_profile,
      linkedin_profile_url,
      facebook_profile_url,
    } = completeBody;
    const result = await this.profileService.updateProfile(
      first_name,
      last_name,
      dob,
      github_profile,
      linkedin_profile_url,
      facebook_profile_url,
    );
    return result;
  }
}
