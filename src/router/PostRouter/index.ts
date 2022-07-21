import express from 'express';
import {getPosts} from './get';
import {writePost} from './post';

export const PostRouter = express.Router();

PostRouter.route('/posts').get(getPosts).post(writePost);
