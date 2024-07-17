import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { Link as RouterLink } from 'react-router-dom';

import { Box, Container, Image, Link , Stack } from '@chakra-ui/react';

import Logo from "@/assets/logo.jpeg"
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
								href=""
								rel="noreferrer"
							>
								<FaFacebookF size="30" />
							</a>
							<a
								target="_blank"
								href=""
								rel="noreferrer"
							>
								<FaLinkedinIn size="30" />
							</a>
							<a
								target="_blank"
								href=""
								rel="noreferrer"
							>
								<RiTwitterXLine size="30" />
							</a>
						</Stack>
			</Container>
		</Box>
	);
};
