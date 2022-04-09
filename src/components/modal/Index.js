import React, { useEffect, useState } from "react"
import { connect } from "react-redux"

import { changeModal } from '../../redux/Users/action.js'
import { ModalRegister } from "./ModalRegister"

function Modal(props) {

	// Action
	const { changeModal } = props
	const [exit, setExit] = useState(false)

	useEffect(() => {

		const sT = setTimeout(() => {
			setExit(true)
			setTimeout(() => {
				changeModal(false)
			}, 900)
		
		}, 2000)

		return () => {
			clearTimeout(sT)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={`modal-container ${exit && 'exit'}`}>
			<ModalRegister />
		</div>
	)
}

export default connect(null, {changeModal})(Modal)