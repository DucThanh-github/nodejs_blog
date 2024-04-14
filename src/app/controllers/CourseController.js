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
  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    const form = req.body;
    form.image = `https://i.ytimg.com/vi/${form.videoid}/maxresdefault.jpg`;
    const newCourse = new course(form);
    newCourse
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }

  // [PUT] /courses/:id/edit

  edit(req, res, next) {
    course
      .findById({ _id: req.params.id })
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObject(course) })
      )
      .catch(next);
  }
}
