import React from "react"

import { HeaderSections } from "../../tags/HeaderSections"
import FormPost from "./form"

function WorkingWithPost() {

	const title = 'Working with POST request'

	return (
		<section className="section post container">
			<HeaderSections title={title} />
			<FormPost />
		</section>
	)
}

export {WorkingWithPost}