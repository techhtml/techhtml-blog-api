import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import {initializeApp} from 'firebase-admin/app';
import {MessageRouter} from './router/MessageRouter';

const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

initializeApp();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use(MessageRouter);

const port = parseInt(`${process.env.PORT}`) || 8080;

app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
