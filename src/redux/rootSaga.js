import { all } from 'redux-saga/effects'
import { userSaga } from "./Users/saga";

export function* rootSaga() {
	yield all([
		userSaga()
	])
}