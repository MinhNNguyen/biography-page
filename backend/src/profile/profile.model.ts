import * as mongoose from 'mongoose';

// TODO: to handle saving file for profile_image and resume

export const ProfileSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  dob: { type: String, required: false },
  github_profile: {
    type: [{ url: String }],
    required: false,
  },
  linkedin_profile_url: {
    type: String,
    required: false,
  },
  facebook_profile_url: {
    type: String,
    required: false,
  },
});

export interface Profile extends mongoose.Document {
  first_name: string;
  last_name: string;
  dob: string;
  github_profile: {
    url: string;
  }[];
  linkedin_profile_url: string;
  facebook_profile_url: string;
}
