import React from "react"

function Radio(props) {

	const { array, title, cb } = props

	return (
		<div className="radio-form">
			<div className="radio-form-title">{title}</div>
			{array.map(item => (
				<div className="custom-radio" key={item.id}>
					<label className='radio-form-label'>
						<input type='radio' name="position_id" value={item.id} className='radio-input' onChange={cb}/>
						<div className="custom-radio-label"><span>{item.name}</span></div>
					</label>
				</div>
			))}
		</div>
	)
	
	
}

export {Radio}