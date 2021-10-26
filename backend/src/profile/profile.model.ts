import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  profile_image: { type: File, required: false },
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
  resume: {
    type: File,
    required: false,
  },
});

export interface Profile extends mongoose.Document {
  first_name: string;
  last_name: string;
  profile_image: File;
  dob: string;
  github_profile: {
    url: string;
  }[];
  linkedin_profile_url: string;
  facebook_profile_url: string;
  resume: File;
}
