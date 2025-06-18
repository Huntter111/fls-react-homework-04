import { useState } from 'react'
import s from './Messenger.module.scss'
import Form from './Form'
import Chat from './Chat'

const Messenger = () => {
	const [chat, setChat] = useState(() => [])
	const [isNewMessage, setIsNewMessage] = useState(false)
	function increase(id) {
		setChat((prev) =>
			prev.map((el) => (el.id === id ? { ...el, likes: el.likes + 1 } : el)),
		)
	}
	function decrease(id) {
		setChat((prev) =>
			prev.map((el) =>
				el.id === id ? { ...el, dislikes: el.dislikes + 1 } : el,
			),
		)
	}
	return (
		<>
			<div>
				<h4 className={s.title}>
					Приклад. Створити імітатор мессенджера. Є можлиість
					додавати/відображати повідомлення і ставити лайки (додайте стилі на
					свій розсуд).
				</h4>
			</div>
			<div className={s.wrapper}>
				<div className={s.chat}>
					<Chat
						like={increase}
						dislike={decrease}
						isNewMessage={isNewMessage}
						setIsNewMessage={setIsNewMessage}
						chat={chat}
					/>
				</div>
				<div className={s.messages}>
					<Form
						setChat={setChat}
						setIsNewMessage={setIsNewMessage}
					/>
				</div>
			</div>
		</>
	)
}

export default Messenger
