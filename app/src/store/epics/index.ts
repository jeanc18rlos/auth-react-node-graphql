import { combineEpics } from 'redux-observable';
import postEpic from './posts';
import authEpic from './auth';

const rootEpic = combineEpics(
  authEpic,
  postEpic
);

export default rootEpic;