import { useEffect, useState } from 'react'
import Player from './Player'
import RandomNumbers from './RandomNumbers'
import s from './GuessTheNumber.module.scss'
import image from '../../assets/task-2.png'
import { generateRandomArr } from './utils'

const GuessTheNumber = () => {
	const [randomNumbers, setRandomNumbers] = useState(() => [])

	const [guessedByPlayer1, setGuessedByPlayer1] = useState([])
	const [guessedByPlayer2, setGuessedByPlayer2] = useState([])
	const [usedNumbers, setUsedNumbers] = useState([])

	const [activePlayer, setActivePlayer] = useState(1)
	const [gameOver, setGameOver] = useState(false)
	const [loser, setLoser] = useState(null)
	console.log(' GuessTheNumber ~ loser:', loser)
	const [reset, setReset] = useState(false)

	const guessedNumbers = [...guessedByPlayer1, ...guessedByPlayer2]

	useEffect(() => {
		const randomThreeNumbers = generateRandomArr()
		setRandomNumbers(randomThreeNumbers)
	}, [reset])

	function handleReset() {
		setReset((prev) => !prev)
		setGuessedByPlayer1([])
		setGuessedByPlayer2([])
		setUsedNumbers([])
		setActivePlayer(1)
		setGameOver(false)
		setLoser(null)
	}
	function handleGuess(num) {
		if (usedNumbers.includes(num) || gameOver) return

		setUsedNumbers((prevUsed) => [...prevUsed, num])

		const isCorrect = randomNumbers.includes(num)

		if (activePlayer === 1) {
			if (isCorrect) {
				setGuessedByPlayer1((prev) => [...prev, num])
			}
		} else {
			if (isCorrect) {
				setGuessedByPlayer2((prev) => [...prev, num])
			}
		}
		if (isCorrect && guessedNumbers.length + 1 === 3) {
			setGameOver(true)
			setLoser(activePlayer)
			return
		}
		setActivePlayer((prev) => (prev === 1 ? 2 : 1))
	}
	return (
		<div>
			<div>
				<img
					className={s.image}
					src={image}
					alt="task 2"
				/>
			</div>
			<div>
				<RandomNumbers
					randomNumbers={randomNumbers}
					guessedNumbers={guessedNumbers}
				/>
				<div className={s.wrapperPlayers}>
					<Player
						playerNumber={1}
						isActive={activePlayer === 1}
						handleGuess={handleGuess}
						usedNumbers={usedNumbers}
						guessedNumber={guessedByPlayer1}
						gameOver={gameOver}
					/>
					<Player
						playerNumber={2}
						isActive={activePlayer === 2}
						handleGuess={handleGuess}
						usedNumbers={usedNumbers}
						guessedNumber={guessedByPlayer2}
						gameOver={gameOver}
					/>
				</div>
			</div>
			<div>
				{gameOver && (
					<div className={s.result}>
						<h2>Гру програв {loser === 1 ? 'Перший' : 'Другий'} гравець!</h2>
						<button
							onClick={handleReset}
							className={s.reset}
						>
							Reset the game
						</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default GuessTheNumber
