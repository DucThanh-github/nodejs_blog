import { course } from "../models/Course.js";
import { mongooseToObject } from "../../util/mongoose.js";

export class CourseController {
  // [GET] /home
  show(req, res, next) {
    course
      .findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
}
