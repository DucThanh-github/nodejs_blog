import { course } from "../models/Course.js";
import { multipleMongooseToObject } from "../../util/mongoose.js";

export class MeController {

  // [POST] /courses/store
  storedCourses(req, res, next) {
    // res.render("me/stored-courses")
    course
      .find({})
      .then((courses) => res.render("me/stored-courses", { courses: multipleMongooseToObject(courses)}))
      .catch(next);
  }
}
