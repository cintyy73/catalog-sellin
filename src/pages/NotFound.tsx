import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon } from '@primer/octicons-react';

import { Box, Center, Link, Stack, TagLeftIcon, Text } from '@chakra-ui/react';

export default function NotFound() {
	const navigate = useNavigate();
	const returnPage = () => navigate(-1);
	return (
		<Center minH="70vh">
			<Box textAlign="center">
				<Text fontSize="6xl" fontWeight="bold" mb="4">
					404
				</Text>
				<Text fontSize="2xl" mb="4">
					Not Found
				</Text>
				<Stack gap={6}>
					<Link as={RouterLink} to="/" color="blue.500">
						Volver a la página de inicio
					</Link>
					<Link onClick={returnPage} color="blue.500">
						<Text>
							{' '}
							<TagLeftIcon as={ArrowLeftIcon} /> Atrás
						</Text>
					</Link>
				</Stack>
			</Box>
		</Center>
	);
}
