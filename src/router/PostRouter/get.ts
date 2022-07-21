import {firestore} from 'firebase-admin';
import {Request, Response} from 'express';

export const getPosts = async (req: Request, res: Response) => {
  const {postId} = req.query;

  if (postId) {
    const postRef = firestore().collection('posts').doc(`${postId}`);
    const snapshot = await postRef.get();
    const data = snapshot.data();

    res.status(200).send({
      id: snapshot.id,
      ...data,
    });

    return;
  }

  const messageRef = firestore().collection('posts');
  const snapshot = await messageRef.get();
  const dataset = snapshot.docs.map(doc => {
    const {id} = doc;
    return {
      id,
      ...doc.data(),
    };
  });
  res.status(200).send(dataset);
};
