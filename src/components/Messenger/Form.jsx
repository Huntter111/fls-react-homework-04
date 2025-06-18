import { useState } from 'react'
import s from './Form.module.scss'

const FormMessage = ({ setChat, setIsNewMessage }) => {
	const [text, setText] = useState('')

	function handleClick() {
		if (text.trim() === '') {
			setText('')
			return
		}
		const newMessage = {
			id: new Date().getTime(),
			message: text,
			likes: 0,
			dislikes: 0,
		}
		setChat((prev) => [...prev, newMessage])
		setIsNewMessage(true)
		setText('')
	}
	function handleKeyDown(e) {
		if (e.key === 'Enter') {
			handleClick()
		}
	}
	const buttonDisabled = text === ''
	return (
		<div className={s.form}>
			<input
				type="text"
				value={text}
				className={s.input}
				placeholder="Type a new message"
				onChange={(e) => setText(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button
				disabled={buttonDisabled}
				className={s.button}
				onClick={handleClick}
			>
				Send
			</button>
		</div>
	)
}

export default FormMessage
