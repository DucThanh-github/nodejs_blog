function multipleMongooseToObject(mongooseArray) {
  return mongooseArray.map((item) => item.toObject());
}

function mongooseToObject(mongoose) {
  return mongoose ? mongoose.toObject() : mongoose;
}

export { multipleMongooseToObject, mongooseToObject };
