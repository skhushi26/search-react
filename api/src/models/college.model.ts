import mongoose from 'mongoose';

export interface CollegeDocument extends mongoose.Document {
  title: String;
  short_description: String;
  description: String;
  image: String;
}

export const collegeSchema = new mongoose.Schema({
  title: { type: String },
  short_description: { type: String },
  description: { type: String },
  image: { type: String },
});
