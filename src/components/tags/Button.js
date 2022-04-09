import React from 'react'

function Button(props) {

	const { style, title, cb, disabled } = props

	return <button className={style} onClick={cb} disabled={disabled}>{title}</button>
}

export {Button}