import React from "react"

function HeaderSections(props) {

	const { title } = props

	return <h1 className="section-header">{ title }</h1>
}

export {HeaderSections}