import { useOnClickOutside } from '../../../hooks/useOnClickOutside'

import styles from './Hamburger.module.scss'

import { RiMenu3Fill } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import Menu from './Menu'

const Hamburger = () => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)
	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? <IoClose color='white' /> : <RiMenu3Fill color='white' />}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
