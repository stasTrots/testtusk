import React, { useState } from "react"
import { connect } from "react-redux"

import { Button } from "../../tags/Button"
import { File } from "../../tags/File"
import { Input } from "../../tags/Input"
import { Radio } from "../../tags/Radio"
import { getUser, changeModal } from '../../../redux/Users/action.js'

function FormPost(props) {

	// State
	const { positions, token } = props.user
	// Action
	const { getUser, changeModal } = props
	let formData = new FormData()
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		phone: '',
		position_id: null,
		photo: null
	})
	const [state, setState] = useState({
		success: true,
		file: null
	})
	const inputs = [
		{ holder: 'Your name', name: 'name', value: formState.name, cb: changeForm, style: 'input', type: 'text', helper: '', pattern: '[A-ZА-Я][a-zа-я]{2,}'},
		{ holder: 'Email', name: 'email', value: formState.email, cb: changeForm, style: 'input', type: 'email', helper: '', pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$'},
		{ holder: 'Phone', name: 'phone', value: formState.phone, cb: changeForm, style: 'input', type: 'tel', helper: '+38 (XXX) XXX - XX - XX', pattern: '[+][0-9]{12}'},
	]
	const btnStatus = (!formState.name.length || !formState.email.length || !formState.phone.length || !formState.position_id || !formState.photo) ? true : false
	const btn = { style: 'button center', title: 'Sign up', cb: () => changeFormData(), disabled: btnStatus }
	
	function changeFormData() {
		formData.append('name', formState.name)
		formData.append('email', formState.email)
		formData.append('phone', formState.phone)
		formData.append('position_id', formState.position_id)
		formData.append('photo', formState.photo)

		fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
			method: 'POST',
			body: formData,
			headers: {'Token': token}
		}).then(response => response.json())
			.then(data => {
				if (data.success) {
					clearState()
					changeModal(true)
					getUser({ url: "/api/v1/users?page=1&count=6", condition: false })
				} else {
					alert('Невозможно добавить NewUser...')
				}
		})		
	}

	function clearState() {
		setFormState({
			name: '',
			email: '',
			phone: '',
			position_id: null,
			photo: null
		})
		setState({
			success: true,
			file: null
		})
	}

	function changeForm(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
	}

	function changePhoto(data) {
		setFormState({
			...formState,
			photo: data
		})
	}

	return (
		<form onSubmit={e => e.preventDefault()} className='form-post-section'>
			{inputs.map((item, i) => <Input key={i} {...item} />)}
			<Radio array={positions} title='Select your position' cb={changeForm} value={formState.position_id}/>
			<File cb={changePhoto} state={state} setState={setState}/>
			<Button {...btn} />
		</form>
	)
}

export default connect(({user}) => ({user}), {getUser, changeModal})(FormPost)