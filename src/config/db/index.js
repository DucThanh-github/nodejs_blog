import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    console.log("Mongoose Connected");
  } catch (error) {
    console.log("failed");
  }
}

export { connect };
