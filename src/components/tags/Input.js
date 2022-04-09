import React, { useRef, useState } from "react"

function Input(props) {

	const { holder, name, value, cb, style, type, helper, pattern } = props
	const [stateInput, setStateInput] = useState(false)
	const ref = useRef()

	return (
		<div className="input-container">
			<div className={`input-label ${(stateInput || value.length) && 'target'} ${value.length ? (!ref.current.validity.valid && 'valid') : '' }`}>{holder}</div>
			<input type={type} ref={ref} className={style} name={name} value={value} onChange={cb} onFocus={() => setStateInput(true)} onBlur={() => setStateInput(false)} pattern={value.length ? pattern : ''}/>
			<div className={`input-help ${value.length ? (!ref.current.validity.valid && 'fail') : '' }`}>{helper}</div>
		</div>
	)
	}

export {Input}