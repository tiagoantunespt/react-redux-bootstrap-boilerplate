import { call, put, takeLatest } from 'redux-saga/effects'

function request (userId) {
  return fetch('/api/users/123')
}

function* fetchUser(action) {
   try {
      const user = yield call(request, action.userId)
      yield put({type: "USER_FETCH_SUCCEEDED", user})
   } catch (e) {
      yield put({type: "USER_FETCH_ERROR", error: e.message})
   }
}

function* mySaga() {
  yield takeLatest("FETCH_INFO", fetchUser)
}

export default mySaga