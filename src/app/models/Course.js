import mongoose from "mongoose";
import slug from "mongoose-slug-updater"

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  videoid: {type: String},
  level: { type: String },
  slug: {type:String, slug: "name",  unique: true},
}, {timestamps: true});

export const course = mongoose.model('Course', Course)