import { takeLatest, call, put } from "redux-saga/effects";
import { getListPostRequest, getListPostSuccess } from "./slice";
import { getListPost } from "./postApi";
import { AxiosResponse } from "axios";

// worker
function* fetchApiListPost() {
  try {
    const res: AxiosResponse = yield call(getListPost);
    console.log(getListPostSuccess(res));
    if (res) {
      yield put(getListPostSuccess(res));
    }
  } catch (error) {
    console.log(error);
  }
}

// watcher
export function* postSaga() {
  yield takeLatest(getListPostRequest, fetchApiListPost);
}
