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
    const response = yield call(API.postData, `${process.env.FOB_SERVER}/users`, action.payload);
    
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: 'REG_SUCCEEDED',
        payload: action.payload,
      }) 

    } else {
      throw response;
    }
  } catch (error) {
    yield put({
      type: 'REG_FAILED',
      payload: error,
    })
  }
}

export default function* rootSaga() {
  yield takeEvery('BOOKLIST_REQUESTED', getBookList);
  yield takeEvery('REG_REQUESTED', sendRegData);
}
