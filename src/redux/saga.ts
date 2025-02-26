import { takeLatest, call, put } from "redux-saga/effects";
import {
  getListPostFailure,
  getListPostRequest,
  getListPostSuccess,
} from "./slice";
import { getListPost } from "./postApi";
import { AxiosResponse } from "axios";

// worker
function* fetchApiListPost() {
  try {
    const res: AxiosResponse = yield call(getListPost);
    if (res) {
      yield put(getListPostSuccess(res));
    } else {
      yield put(getListPostFailure());
    }
  } catch (error) {
    console.log(error);
  }
}

// watcher
export function* postSaga() {
  yield takeLatest(getListPostRequest, fetchApiListPost);
}
