import React from "react"

function File(props) {

	const { cb, state, setState } = props


	function changeState(e) {
		if (e.target.files[0]) {
			const { size, type } = e.target.files[0]
			const newType = type.split('/')[1]

			if (size < 5000000 && (newType === 'jpg' || newType === 'jpeg')) {
				setState({
					...state,
					file: e.target.files[0],
					success: true
				})
				cb(e.target.files[0])
			} else {
				setState({
					success: false,
					file: null
				})
				alert('Некорректное значение.Фото долно быть меньше 5мб и формата jpg или jpeg')
			}
		}		
	}

	return (
		<div className={`input-file-container ${!state.success && 'invalid'}`}>
			<label htmlFor="input-file" className="input-file-label">
				<span>Upload</span>
				<span>{!state.file ? 'Upload your photo' : state.file.name}</span>
			</label>
			<input type='file' name="file" id="input-file" className="input-file" onChange={changeState}/>
		</div>
		
	)
}

export {File}