import { Link as RouterLink } from "react-router-dom";

import { Box, Container, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";


export const Header: React.FC = () => {
  return (
    <Box bg="#2d377e" w="100%" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)">
      <Container
        display="flex"
        justifyContent="space-between"
        maxWidth="1200px"
        alignItems="center"
        flexDir={{ base: "column", md: "row" }}
        textAlign={{ base: "center", md: "left" }}
      >
        <Link as={RouterLink} to={"/"} py={6}>
          <Image src="src/base/logo.jpeg " w={200}/>
        </Link>
<Stack color="white">
<Heading>Sellin</Heading>
<Text>Creando oprtunidades</Text>
</Stack>
       
      </Container>
    </Box>
  );
};
