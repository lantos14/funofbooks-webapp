import "regenerator-runtime/runtime";
import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';

function* getStory() {
  try {
    yield delay(100);
    const data = yield call(API.getData, 'http://localhost:3030/nospoiler');
    yield put({
      type: 'UNSPOILERED_TEXT_SUCCEEDED',
      payload: data,
    });
  } catch (error) {
    console.log(error); //eslint-disable-line
  }
}

export default function* rootSaga() {
  yield takeEvery('UNSPOILERED_TEXT_REQUESTED', getStory);
}
