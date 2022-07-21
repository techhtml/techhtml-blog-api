import {firestore} from 'firebase-admin';
import {Request, Response} from 'express';

export const writePost = async (req: Request, res: Response) => {
  const {title, content} = req.body;

  const ref = firestore().collection('posts');
  await ref.add({title, content});
  res.status(200).send('게시글 작성 완료');
};
