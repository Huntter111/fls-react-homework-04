import { useState } from 'react'
import s from './Player.module.scss'

const Player = ({
	playerNumber,
	isActive,
	handleGuess,
	usedNumbers,
	guessedNumber,
	gameOver,
}) => {
	const [inputValue, setInputValue] = useState('')

	const [error, setError] = useState('')
	const handleInputChange = (e) => {
		const value = parseInt(e.target.value)
		const usedNumber = usedNumbers.includes(value)

		if (isNaN(value)) {
			setError('Введіть значення')
			setInputValue('')
		} else if (String(value).length > 1) {
			setError('Допустимо тільки одне число')
		} else if (usedNumber) {
			setError('Це число вже використовувалось')
		} else {
			setError('')
		}
		setInputValue(value)
	}
	const handleClick = () => {
		if (inputValue === '' || usedNumbers.includes(inputValue) || gameOver)
			return
		handleGuess(inputValue)
		setInputValue('')
	}

	const isButtonDisabled =
		!isActive ||
		inputValue === '' ||
		usedNumbers.includes(inputValue) ||
		gameOver ||
		error

	return (
		<div className={s.playerBox}>
			<h3>Гравець {playerNumber}</h3>

			<div className={s.inputBlock}>
				<label>
					Цифра:
					<input
						type="number"
						value={inputValue}
						onChange={handleInputChange}
						className={s.input}
						disabled={!isActive || gameOver}
					/>
				</label>

				<button
					onClick={handleClick}
					disabled={isButtonDisabled}
				>
					Зробити хід
				</button>
			</div>

			{<div className={s.error}>{error}</div>}
			<div className={s.guessedList}>
				<h4>Вгадані цифри:</h4>
				{guessedNumber.length === 0 ? (
					<span>Немає</span>
				) : (
					<ul className={s.quantity}>
						{guessedNumber.map((quantity, index) => (
							<li key={index}>{quantity}</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Player
