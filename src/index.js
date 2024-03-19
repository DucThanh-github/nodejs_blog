import { engine } from 'express-handlebars';
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import morgan from 'morgan';
import { route } from './routes/index.js';

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP looger
// app.use(morgan("combined"));

// template engine

app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
