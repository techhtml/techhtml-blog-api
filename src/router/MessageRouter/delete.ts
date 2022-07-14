import {firestore} from 'firebase-admin';
import {Request, Response} from 'express';

export const deleteMessage = async (req: Request, res: Response) => {
  const {messageId} = req.query;

  if (!messageId) {
    res.status(400).send('Message ID is Required');
    return;
  }

  const ref = firestore().collection('message');
  await ref.doc(`${messageId}`).delete();
  res.status(200).send('message 삭제');
};
