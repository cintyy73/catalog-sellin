import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Center, Container, Spinner, Stack } from '@chakra-ui/react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Details } from '@/pages/Details';
import Home from '@/pages/Home';

const NotFoundPage = lazy(() => import('./pages/NotFound'));

function App() {
	return (
		<Stack bg="secondary">
			<Header />
			<Container maxW="1200px" pb={12}>
				<Suspense
					fallback={
						<Center h="100vh">
							<Spinner />
						</Center>
					}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/:id" element={<Details />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</Suspense>
			</Container>
			<Footer />
		</Stack>
	);
}

export default App;
