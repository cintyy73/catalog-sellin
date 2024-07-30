import { Link as RouterLink } from "react-router-dom";

import { Box, Container, Image, Link } from "@chakra-ui/react";

import { Logo } from "@/base";




export const Header: React.FC = () => {
  return (
    <Box bg="#2d377e" w="100%" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)">
      <Container
        display="flex"
        justifyContent="center"
        maxWidth="1200px"
        alignItems="center"
      >
        <Link as={RouterLink} to={"/"} py={6}>
          <Image src={Logo} w={200}/>
        </Link>
      </Container>
    </Box>
  );
};
