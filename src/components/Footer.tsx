import React from 'react';
// import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
// import { RiTwitterXLine } from 'react-icons/ri';
import { Link as RouterLink,
	// NavLink
 } from 'react-router-dom';

import { Box, Container, Image, Link , Stack } from '@chakra-ui/react';

export const Footer: React.FC = () => {
	return (
		<Box bg="primary.500">
			<Container
				maxWidth="1200px"
				color="white"
				py={{ base: '2', md: '0' }}
				display="flex"
				flexDir={{ base: 'column', md: 'row' }}
				alignItems="center"
			>
				  <Link as={RouterLink} to={"/"} py={6}>
          <Image src="src/base/logo.jpeg " w={200}/>
        </Link>
				<Stack
					w={{ base: '100%', md: '50%' }}
					py={5}
					alignItems={{ base: 'center', md: 'start' }}
				>
					{/* <Stack alignItems="center" gap={5}>
						<NavLink to="/">
						</NavLink>
						<Stack flexDirection="row" gap={6}>
							<a
								target="_blank"
								href="https://www.facebook.com/fonselp"
								rel="noreferrer"
							>
								<FaFacebookF size="30" />
							</a>
							<a
								target="_blank"
								href="https://www.linkedin.com/company/fonselp/"
								rel="noreferrer"
							>
								<FaLinkedinIn size="30" />
							</a>
							<a
								target="_blank"
								href="https://twitter.com/FonselpC"
								rel="noreferrer"
							>
								<RiTwitterXLine size="30" />
							</a>
						</Stack>
					</Stack> */}
				</Stack>
			</Container>
		</Box>
	);
};
