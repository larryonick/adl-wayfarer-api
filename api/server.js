import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import Router from './v1/routes/index';

const app = express();
config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

app.use(Router);

const port = process.env.PORT || 3000;
app.listen(port, () => debug(`Server running on port ${port}...`));

export default app;
