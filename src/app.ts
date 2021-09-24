import express, { RequestHandler } from 'express';
import routes from './routes/index';
import "reflect-metadata"

const app = express();
app.use(express.json() as RequestHandler);
app.use(routes);

export default app;
