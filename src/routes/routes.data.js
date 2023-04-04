import Auth from '../components/screens/auth/Auth'
import Home from '../components/screens/home/Home'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: false
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: true
	} /* 
	{
		path: '/new-exercise',

		component: NewExercise,
		auth: true,
	},

	{
		path: '/workout/:id',

		component: SingleWorkout,
		auth: true,
	},
	{
		path: '/workouts',

		component: ListWorkouts,
		auth: true,
	},
	{
		path: '/exercise/:id',

		component: SingleExercise,
		auth: true,
	}, */
]
