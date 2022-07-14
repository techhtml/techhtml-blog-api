import express from 'express';
import {getMessage} from './get';
import {postMessage} from './post';
import {updateMessage} from './put';
import {deleteMessage} from './delete';

export const MessageRouter = express.Router();

MessageRouter.route('/message')
  .get(getMessage)
  .post(postMessage)
  .put(updateMessage)
  .delete(deleteMessage);
