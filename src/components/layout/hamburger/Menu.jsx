import { menu } from './menu.data'
import styles from './Hamburger.module.scss'
import { Link } from 'react-router-dom'

const Menu = ({ isShow }) => {
	return (
		isShow && (
			<nav className={styles.menu}>
				<ul>
					{menu.map(item => (
						<li key={item.title}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					))}
				</ul>
			</nav>
		)
	)
}

export default Menu
