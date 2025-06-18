import { useState } from 'react'
import './App.css'
import CollapsiblePanel from './components/CollapsiblePanel'
import GuessTheNumber from './components/GuessTheNumber/GuessTheNumber'
import Messenger from './components/Messenger/Messenger'

function App() {
	const [activeIndex, setActiveIndex] = useState(1)
	return (
		<div className="app-wrapper">
			<div>
				<CollapsiblePanel
					title="Messenger"
					isActive={activeIndex === 0}
					onShow={() => setActiveIndex(0)}
				>
					<Messenger />
				</CollapsiblePanel>
			</div>
			<div>
				<CollapsiblePanel
					title="Guess The Number"
					isActive={activeIndex === 1}
					onShow={() => setActiveIndex(1)}
				>
					<GuessTheNumber />
				</CollapsiblePanel>
			</div>
		</div>
	)
}

export default App
