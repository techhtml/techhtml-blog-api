import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {initializeApp} from 'firebase-admin/app';
import {firestore} from 'firebase-admin';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));

initializeApp();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/message', async (req: Request, res: Response) => {
  const messageRef = firestore().collection('message');
  const snapshot = await messageRef.get();
  const dataset = snapshot.docs.map(doc => {
    return doc.data();
  });
  res.status(200).send(dataset);
})
app.post('/message', async (req: Request, res: Response) => {
  const messageRef = firestore().collection('message');
  messageRef.add({message: 'hello world'});
  res.status(200).send('message added');
});

const port = parseInt(`${process.env.PORT}`) || 8080;

app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
