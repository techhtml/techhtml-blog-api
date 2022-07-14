import {firestore} from 'firebase-admin';
import {Request, Response} from 'express';

export const getMessage = async (req: Request, res: Response) => {
  // Collection > Doc > {Sub}Collection > Doc
  // firestore().collection('컬렉션명');
  // Reference (Database의 위치)
  const messageRef = firestore().collection('message');
  // Database는 많은 유저가 동시다발적으로 변경
  // HOST A, HOST B, HOST C > 동시에 특정 DB를 찌름
  // 언제나 동일한 Response를 보장할 수 있는가? (보장할 수 없음)
  // 데이터베이스의 현재 상태를 스냅샷 상태로 가져옴
  const snapshot = await messageRef.get();
  const dataset = snapshot.docs.map(doc => {
    return doc.data();
  });
  res.status(200).send(dataset);
};
