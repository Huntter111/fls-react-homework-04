import s from './RandomNumber.module.scss'

const RandomNumbers = ({ randomNumbers, guessedNumbers }) => {
	return (
		<div className={s.randomNum}>
			<h3 className={s.title}>Гра вгадай число</h3>
			<div className={s.wrapper}>
				{randomNumbers.map((el, index) => {
					const isGuessed = guessedNumbers?.includes(el)
					console.log(' {randomNumbers.map ~ isGuessed:', isGuessed)

					return (
						<span
							key={index}
							className={`${s.item} ${isGuessed ? s.visible : s.hidden}`}
						>
							{isGuessed ? el : ''}
						</span>
					)
				})}
			</div>
		</div>
	)
}

export default RandomNumbers
