import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Profile } from './profile.model';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel('Profile') private readonly profileModel: Model<Profile>,
  ) {}

  async createProfile(first_name: string, last_name: string) {
    const newProfile = new this.profileModel({
      first_name,
      last_name,
      dob: '',
      github_profile: [],
      linkedin_profile_url: '',
      facebook_profile_url: '',
    });
    const result = await newProfile.save();
    return result;
  }

  // TODO: update profile
  // TODO: get profile
}
