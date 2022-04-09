import React from "react"

function ModalRegister(props) {

	return (
		<div className="modal-register">
			<h1>User successfully registered</h1>
			<img alt="modal" src={process.env.PUBLIC_URL + 'success-image.svg'} />
		</div>
	)
}

export {ModalRegister}