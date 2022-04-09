import axios from "axios"

const http = axios.create({
	baseURL: 'https://frontend-test-assignment-api.abz.agency'
})

export {http}