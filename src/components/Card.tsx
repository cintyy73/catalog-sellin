import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Product } from "@/types";

import { IMG_EXTENSIONS } from "@/utils/constant";

import { Markup } from "./Markup";
interface CardProps {
  product: Product;
}

const { VITE_STORAGE_URL } = import.meta.env as Record<string, string>;

export const ProductCard = ({ product }: CardProps) => {
  const { title, short_description, networks, id, entity, photo_path } =
    product;

  const isValidPath = IMG_EXTENSIONS.some((ext) => photo_path?.includes(ext));

  return (
    <Card borderRadius="2xl" boxShadow="lg">
      {isValidPath && (
        <Image
          borderTopRadius="2xl"
          h="171px"
          objectFit="cover"
          src={VITE_STORAGE_URL + "/" + photo_path}
          alt={title}
        />
      )}
      <CardHeader>
        <Heading as="h2" fontSize="24px" noOfLines={2}>
          {title}
        </Heading>
        <Divider mt={4} />
      </CardHeader>
      <CardBody>
        <Markup html={short_description}></Markup>
        {networks && networks.length > 0 && (
          <>
            <Text fontSize="20px" fontWeight="bold" my={4}>
              Pertenece a las siguientes redes:
            </Text>
            <Flex gap={2}>
              {networks.map(({ id, name, logo_url }) => (
                <Image
                  key={id}
                  alt={name}
                  src={logo_url}
                  w="48px"
                  h="48px"
                  borderRadius={8}
                />
              ))}
            </Flex>
          </>
        )}
      </CardBody>
      <CardFooter gap={2}>
        <VStack align="flex-start">
          <Text
            as="a"
            href={entity?.web_profile}
            target="_blank"
            fontSize="20px"
            fontWeight="bold"
            color="primary.500"
            w="220px"
          >
            {entity?.fantasy_name}
          </Text>
          <Text fontSize="14px" fontWeight="bold">
            <Markup html={entity?.type?.name} />
          </Text>
        </VStack>
        <Button as={Link} to={`/details/${id}`} color="white" ml="auto">
          Ver más
        </Button>
      </CardFooter>
    </Card>
  );
};

const heigths = [350, 400, 450];
export const ProductSkeleton: React.FC = () => {
  return (
    <Card
      borderRadius="2xl"
      p={6}
      boxShadow="lg"
      h={heigths[Math.floor(Math.random() * heigths.length)]}
    >
      <Skeleton height="30px" mb="6" />
      <SkeletonText
        mb="6"
        mt="4"
        noOfLines={3}
        spacing="4"
        skeletonHeight="3"
      />
      <SkeletonText
        w={150}
        mt="4"
        noOfLines={2}
        spacing="4"
        skeletonHeight="3"
        mb="6"
      />
      <CardFooter>
        <Skeleton height="30px" w="120px" mr="auto" />
        <Skeleton height="40px" w={100} ml="auto" />
      </CardFooter>
    </Card>
  );
};
