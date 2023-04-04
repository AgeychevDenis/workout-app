import styles from './Advantages.module.scss'

const Advantages = ({ title, achievement }) => {
	return (
		<div className={styles.wrapper}>
			<h4>{title}</h4>
			<p>{achievement}</p>
		</div>
	)
}

export default Advantages
