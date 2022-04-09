import {takeLatest, call, put} from 'redux-saga/effects'
import { http } from '../../utils/http';
import { GET_POSITION, GET_TOKEN_SAGA, GET_USERS } from "../types";
import { onloadUsers, setPosition, setToken, setUser } from './action';

function* getUsers({ _, payload }) {
	const { url, condition } = payload
	try {
		const { data } = yield call(http.get, url)
		if (data.success) {
			if (condition) {
				yield put(setUser(data))
			} else {
				yield put(onloadUsers(data))
			}			
		} else {
			alert('Невозможно получить пользователей...')
		}
	} catch (error) {
		console.log(error)
	}
}

function* getToken() { 
	try {
		const { data } = yield call(http.get, '/api/v1/token')
		if (data.success) {
			yield put(setToken(data))
		} else {
			alert('Невозможно получить token...')
		}
	} catch (error) {
		console.log(error)
	}
}

function* getPosition() { 
	try {
		const { data } = yield call(http.get, '/api/v1/positions')
		if (data.success) {
			yield put(setPosition(data))
		} else {
			alert('Невозможно получить position...')
		}
	} catch (error) {
		console.log(error)
	}
}

export function* userSaga() {
	yield takeLatest(GET_TOKEN_SAGA, getToken)
	yield takeLatest(GET_USERS, getUsers)
	yield takeLatest(GET_POSITION, getPosition)
}