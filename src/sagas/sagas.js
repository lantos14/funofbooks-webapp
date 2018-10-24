import "regenerator-runtime/runtime";
import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';

function* getBookList() {
  try {
    yield delay(100);
    const data = yield call(API.getData, `${process.env.FOB_SERVER}/nospoiler`);
    yield put({
      type: 'BOOKLIST_SUCCEEDED',
      payload: data,
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

function* sendRegData(action) {
  try {
    yield delay(100);
    yield call(API.postData, `${process.env.FOB_SERVER}/users`, action.payload);
    yield put({
      type: 'REG_SUCCEEDED',
      payload: action.payload,
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('BOOKLIST_REQUESTED', getBookList);
  yield takeEvery('REG_REQUESTED', sendRegData);
}
