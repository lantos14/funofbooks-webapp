import "regenerator-runtime/runtime";
import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';
import parseTimeStamp from "../utils/parseTimeStamp";

function* getBookList() {
  try {
    yield delay(100);
    const url = `${process.env.FOB_SERVER}/nospoiler`;
    const data = yield call(API.getData, url);
    parseTimeStamp(data);
    data.reverse();
    yield put({
      type: 'BOOKLIST_SUCCEEDED',
      payload: data,
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

function* sendLoginCreds(action) {
  try {
    yield delay(100);
    const url = `${process.env.FOB_SERVER}/authentication`;
    const data = yield call(API.sendLogin, url, action.payload);
    console.log('sendLoginCreds: ', data); //eslint-disable-line

    if (data.code !== undefined) {
      throw data;
    } else {
      yield put({
        type: 'LOGIN_SUCCEEDED',
        payload: data,
      });
    }
  } catch (error) {
    yield put({
      type: 'LOGIN_FAILED',
      payload: error,
    });
  }
}

function* sendRegCreds(action) {
  try {
    yield delay(100);
    const url = `${process.env.FOB_SERVER}/users`;
    const data = yield call(API.sendReg, url, action.payload);
    console.log('sendRegCreds: ', data); //eslint-disable-line

    if (data.code !== undefined) {
      throw data;
    } else {
      yield put({
        type: 'REG_SUCCEEDED',
        payload: data,
      });
    }
  } catch (error) {
    yield put({
      type: 'REG_FAILED',
      payload: error,
    });
  }
}

export default function* rootSaga() {
  yield takeEvery('BOOKLIST_REQUESTED', getBookList);
  yield takeEvery('LOGIN_REQUESTED', sendLoginCreds);
  yield takeEvery('REG_REQUESTED', sendRegCreds);
}
