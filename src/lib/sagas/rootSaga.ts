import { all, fork } from "redux-saga/effects"
import { watchFormSubmissions } from "./formSagas"

export function* rootSaga() {
  yield all([fork(watchFormSubmissions)])
}
