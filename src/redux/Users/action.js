import { GET_POSITION, GET_TOKEN, GET_TOKEN_SAGA, GET_USERS, MODAL_STATE, ONLOAD_USERS, SET_POSITION, SET_USERS } from "../types"

export const getUser = data => {
	return {
		type: GET_USERS,
		payload: data
	}
}
export const setUser = data => {
	return {
		type: SET_USERS,
		payload: data
	}
}

export const getToken = () => { return { type: GET_TOKEN_SAGA } } 

export const setToken = data => {
	return {
		type: GET_TOKEN,
		payload: data
	}
}

export const getPosition = () => { return { type: GET_POSITION } }
export const setPosition = data => {
	return {
		type: SET_POSITION,
		payload: data
	}
}

export const onloadUsers = data => {
	return {
		type: ONLOAD_USERS,
		payload: data
	}
}

export const changeModal = data => {
	return {
		type: MODAL_STATE,
		payload: data
	}
}