import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'utils/history';
import userInfo from './userInfo';

export default function createReducer() {
  return combineReducers({
    router: connectRouter(history),
    userInfo,
  });
}
