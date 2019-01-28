import "regenerator-runtime/runtime";
import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import * as API from '../services/api';
import parseTimeStamp from "../utils/parseTimeStamp";

function* getBookList() {
  try {
    yield delay(100);
    const url = `${process.env.FOB_SERVER}/nospoiler`
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

export default function* rootSaga() {
  yield takeEvery('BOOKLIST_REQUESTED', getBookList);
}
