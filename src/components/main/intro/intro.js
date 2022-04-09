import React from "react"
import { Button } from "../../tags/Button"

function Intro() {

	const btn = { style: 'button', title: 'Sign up', cb: () => { alert('В тз работоспособность кнопки не расписана.... Вроде как') }, disabled: false }
	
	return (
		<section className="intro container">
			<div className="intro-text-container">
				<div className="intro-text">
					<h1>Test assignment for front-end developer</h1>
					<span>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</span>
				</div>
				<Button {...btn}/>
			</div>
		</section>
	)
}

export {Intro}