import {firestore} from 'firebase-admin';
import {Request, Response} from 'express';

export const writePost = async (req: Request, res: Response) => {
  const {title, content} = req.body;
  try {
    if (!title) {
      res.status(400).send('Title은 필수값입니다.');
      return;
    }

    if (!content) {
      res.status(400).send('Description은 필수값입니다.');
      return;
    }

    const ref = firestore().collection('posts');
    await ref.add({title, content});
    res.status(200).send('게시글 작성 완료');
  } catch (error) {
    res.status(400).send(error);
  }
};
