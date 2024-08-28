import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Container, Image, Link , Stack } from '@chakra-ui/react';

import { Logo } from '@/base';


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
				justifyContent="space-around"
			>
				  <Link as={RouterLink} to={"/"} py={6}>
          <Image src={Logo} w={200}/>
        </Link>
						<Stack flexDirection="row" gap={6}>
							<a
								target="_blank"
								href="https://www.facebook.com/sellinnet/"
								rel="noreferrer"
							>
								<FaFacebookF size="30" />
							</a>
							{/* <a
								target="_blank"
								href="https://www.facebook.com/sellinnet/"
								rel="noreferrer"
							>
								<FaLinkedinIn size="30" />
							</a> */}
							<a
								target="_blank"
								href="https://www.instagram.com/sellin.uruguay/"
								rel="noreferrer"
							>
								<FaInstagram
								size="30" />
							</a>
						</Stack>
			</Container>
		</Box>
	);
};
