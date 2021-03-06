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

  async getProfile() {
    const result = await this.profileModel.findOne();
    return result;
  }

  async updateProfile(
    first_name,
    last_name,
    dob,
    github_profile,
    linkedin_profile_url,
    facebook_profile_url,
  ) {
    const updatedProfile = await this.profileModel.findOne();
    if (first_name) {
      updatedProfile.first_name = first_name;
    }
    if (last_name) {
      updatedProfile.last_name = last_name;
    }
    if (dob) {
      updatedProfile.dob = dob;
    }
    if (github_profile) {
      updatedProfile.github_profile = github_profile;
    }
    if (linkedin_profile_url) {
      updatedProfile.linkedin_profile_url = linkedin_profile_url;
    }
    if (facebook_profile_url) {
      updatedProfile.facebook_profile_url = facebook_profile_url;
    }
    updatedProfile.save();
    return updatedProfile;
  }
}
