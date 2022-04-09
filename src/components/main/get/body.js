import React from "react"
import { connect } from "react-redux"

import { Button } from "../../tags/Button"
import { HeaderSections } from "../../tags/HeaderSections"
import { getUser } from '../../../redux/Users/action.js'
import { UserItem } from './item.js'

function User(props) {

	// Action
	const { getUser } = props
	// State
	const { loader, users: { array, totalUsers, url } } = props.user

	const title = 'Working with GET request'
	const btn = { style: 'button get-btn', title: 'Show more', cb: () => { getUser({ url, condition: true }) }, disabled: false}

	return (
		<section className="section user container">
			<HeaderSections title={title} />
			<div className="user-list">
				{array.map(item => <UserItem key={item.id} {...item}/>)}	
			</div>
			<div className="loader">
				{
					loader ?
						<img alt="loader" src={process.env.PUBLIC_URL + 'Preloader.svg'} /> :
						!(array.length >= +totalUsers) && <Button {...btn}/>
				}
			</div>
		</section>
	)
}

export default connect(({user}) => ({user}), {getUser})(User)