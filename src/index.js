import { engine } from "express-handlebars";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import morgan from "morgan";
import { route } from "./routes/index.js";
import * as db from "./config/db/index.js";

const app = express();
const port = 3002;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// conect db
db.connect();
// HTTP looger
// app.use(morgan("combined"));

// template engine

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");

// route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
