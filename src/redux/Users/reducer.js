import { GET_TOKEN, GET_USERS, ONLOAD_USERS, SET_POSITION, SET_USERS } from "../types"

const initialState = {
	token: '',
	users: {
		url: "/api/v1/users?page=1&count=6",
		totalUsers: 0,
		array: []
	},
	loader: false,
	positions: []
}

const user = (state = initialState, { type,  payload }) => {
	switch (type) {
		case GET_TOKEN: 
			return {
				...state,
				token: payload.token
			}
		case SET_USERS:
			return {
				...state,
				users: {
					...state.users,
					url: payload.links.next_url.slice(47),
					totalUsers: payload.total_users,
					array: [...state.users.array, ...payload.users].sort((a,b) => a.registration_timestamp > b.registration_timestamp)
				},
				loader: false
			}
		case GET_USERS:
			return {
				...state,
				loader: true
			}
		case SET_POSITION:
			return {
				...state,
				positions: payload.positions
			}
		case ONLOAD_USERS:
			return {
				...state,
				users: {
					...state.users,
					array: payload.users.sort((a, b) => a.registration_timestamp > b.registration_timestamp),
					url: payload.links.next_url.slice(47),
					totalUsers: payload.total_users
				},
				loader: false
			}
		default: return state
	}
}

export default user