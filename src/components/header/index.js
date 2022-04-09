import React from "react"
import { Button } from "../tags/Button"


function Header() {

	const btns = [
		{ style: 'button', title: 'Users', cb: () => { alert('В тз работоспособность кнопки не расписана.... Вроде как') }, disabled: false},
		{ style: 'button', title: 'Sign up', cb: () => { alert('В тз работоспособность кнопки не расписана.... Вроде как') }, disabled: false}
	]

	return (

		<header className="header">
			<div className="container wrapper">
				<div>
					<img alt='logo' src={process.env.PUBLIC_URL + "Logo.svg"}/>
				</div>
				<div className="header-buttons">
					<Button {...btns[0]}/>
					<Button {...btns[1]}/>
				</div>
			</div>
		</header>

	)
}

export { Header }