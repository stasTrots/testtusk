import React from "react"

function UserItem(props) {

	const { name, email, phone, photo, position } = props

	return (
		<div className="user-item">
			<img alt="avatar" src={photo} />
			<div className="user-item-name">
				<p>{name}</p>
			</div>
			<div className="user-item-info">
				<p>{position}</p>
				<p title={email}>{email}</p>
				<p>{phone}</p>
			</div>
		</div>
	)
}

export {UserItem}