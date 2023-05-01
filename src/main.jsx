import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	QueryClient,
	QueryClientProvider,
	useQuery
} from '@tanstack/react-query'

import './assets/styles/index.scss'
import Router from './routes/Routes'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	</React.StrictMode>
)
