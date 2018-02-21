import { takeEvery } from 'redux-saga'
import { put, fork } from 'redux-saga/effects' // put === dispatch

//工作者
function* Worker() {
    yield put({ type: 'SUCESS' })
    yield put({ type: 'SUCESS111' })
}
//监听者
function* watcher() {
    yield takeEvery('REQUEST_ADD', Worker)
}

export default function* rootSaga() {
    yield fork(watcher)
}