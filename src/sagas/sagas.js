import "regenerator-runtime/runtime";
import { delay } from 'redux-saga';
import { takeEvery, put, call } from 'redux-saga/effects';
import { history } from '../store/configureStore';
import * as API from '../services/api';

function* login(action) {
  try {
    const token = yield call(
      API.login,
      action.email,
      action.pwd
    );
    localStorage.setItem('token', token.accessToken);
    yield put({
      type: 'LOGIN_SUCCEEDED',
      token: token.accessToken,
      email: action.email,
    });
    yield put({
      type: 'RESTORE_USER_BY_TOKEN_REQUESTED',
    });
    history.push('/');
  } catch (error) {
    yield put({
      type: 'LOGIN_FAILED',
    });
    console.log(error); // eslint-disable-line
  }
}

function* getBookList() {
  try {
    yield delay(100);
    const data = yield call(API.getData, `${process.env.FOB_LOCAL_SERVER}/nospoiler`);
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
  yield takeEvery('LOGIN_REQUESTED', login);
}
