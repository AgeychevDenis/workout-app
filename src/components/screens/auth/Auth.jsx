import Button from '../../ui/button/Button'
import Layout from '../../layout/Layout'

import { useForm } from 'react-hook-form'

import styles from './Auth.module.scss'

const Auth = () => {
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(schema)
	})

	return (
		<Layout bgImage='/images/auth-bg.png'>
			<form onSubmit={handleSubmit(d => console.log(d))}>
				<input {...register('name')} />
				<input type='number' {...register('age')} />
				<input type='submit' />
			</form>
		</Layout>
	)
}

export default Auth
