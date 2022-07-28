import {randomUUID} from 'crypto';
import express, {Request, Response} from 'express';
import {getStorage} from 'firebase-admin/storage';
export const UploadRouter = express.Router();

UploadRouter.post('/upload', async (req: Request, res: Response) => {
  const filename = randomUUID();
  const bucket = getStorage().bucket();
  await bucket.file(filename).save(req.body);
  res
    .status(200)
    .send(
      `https://storage.cloud.google.com/techhtml-blog.appspot.com/${filename}`
    );
});
