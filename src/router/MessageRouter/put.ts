import {firestore} from 'firebase-admin';
import {Request, Response} from 'express';

export const updateMessage = async (req: Request, res: Response) => {
  const {messageId, message} = req.query;

  if (!messageId) {
    res.status(400).send('Message ID is Required');
    return;
  }

  const ref = firestore().collection('message');
  await ref.doc(`${messageId}`).set({message});
  res.status(200).send('message 수정');
};
