import s from './CollapsiblePanel.module.scss'
const CollapsiblePanel = ({ title, children, isActive, onShow }) => {
	return (
		<div className={s.CollapsiblePanel}>
			<h3
				onClick={onShow}
				className={`${s.title} ${isActive ? s.active : ''}`}
			>
				{title} 👆
			</h3>
			{isActive && <div className={s.children}>{children}</div>}
		</div>
	)
}

export default CollapsiblePanel
