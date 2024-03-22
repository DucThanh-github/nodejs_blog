import { course } from "../models/Course.js";
import { multipleMongooseToObject } from "../../util/mongoose.js";
export class SiteController {
  // [GET] /home
  async home(req, res, next) {
    course
      .find({})
      .then((courseRes) => {
        const course = multipleMongooseToObject(courseRes);
        return res.render("home", { course });
      })
      .catch((err) => next(err));
    // res.render('home');
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}
