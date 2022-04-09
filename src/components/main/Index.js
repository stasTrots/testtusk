import React from "react"

import { Intro } from "./intro/intro.js"
import User from "./get/body.js"
import {WorkingWithPost} from "./post/body.js"

function Main() {

	return (
		<main className="main">
			<Intro />
			<User />
			<WorkingWithPost />
		</main>
	)
}

export { Main }