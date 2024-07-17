import {
  FaFacebookF,
  FaInstagram,
  FaLink,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { CodeOfConductIcon } from "@primer/octicons-react";

import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";

import { ProductWithSdgs } from "@/types";

import { GoogleMap } from "@/components/maps/GoogleMap";
import { Markup } from "@/components/Markup";
import { Ods } from "@/components/Ods";
import NotFound from "@/pages/NotFound";
import { fetchProduct } from "@/services/product.service";

const mapSize = {
  width: "100%",
  height: "15rem",
  borderRadius: "12px",
};

export const Details = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(
    ["product", id],
    () => fetchProduct(id),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const { entity, product_type, title, description, networks, sdgs } =
    data || ({} as ProductWithSdgs);

  if (!isLoading && !data) {
    return <NotFound />;
  }

  return (
    <Stack gap={3} py={5}>
      <GoogleMap
        markers={[
          {
            lat: entity?.location_lat,
            lng: entity?.location_lng,
            bussinessName: entity?.bussiness_name,
            fantasyName: entity?.fantasy_name,
            id: entity?.id,
          },
        ]}
        styles={mapSize}
      />
      <>
        <Card color="primary.500">
          <CardHeader>
            <Skeleton isLoaded={!isLoading} h={10}>
              <Heading size="md">{title}</Heading>
            </Skeleton>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader
          //  borderBottom="1px solid"
          >
            <Heading size="md" color="primary.500">
              Descripción
            </Heading>
            <Divider />
          </CardHeader>
          <CardBody as={Stack} spacing={4}>
            <Heading size="md">Sobre nosotros: </Heading>
            <SkeletonText isLoaded={!isLoading} noOfLines={4} spacing={3}>
              <Markup html={description} />
            </SkeletonText>
            {/* <Heading size="md">Tipo de producto:</Heading> */}
            <SkeletonText isLoaded={!isLoading} noOfLines={4} spacing={3}>
              <Badge fontSize="sm" color="primary.500">
                <Markup html={product_type} />
              </Badge>
            </SkeletonText>
          </CardBody>
        </Card>

        {/* Informacion */}
        <Card>
          <CardHeader>
            <HStack
              color="primary.500"
              justifyContent="space-between"
              alignItems="center"
            >
              <Skeleton isLoaded={!isLoading} h={10}>
                <Heading size="md"> {entity?.fantasy_name}</Heading>
              </Skeleton>
              <Center gap={3}>
                {entity?.facebook_profile && (
                  <a
                    target="_blank"
                    href={entity?.facebook_profile}
                    rel="noreferrer"
                  >
                    <FaFacebookF size="30" />
                  </a>
                )}

                {entity?.twitter_profile && (
                  <a
                    target="_blank"
                    href={entity?.twitter_profile}
                    rel="noreferrer"
                  >
                    <RiTwitterXLine size="30" />
                  </a>
                )}

                {entity?.instagram_profile && (
                  <a
                    target="_blank"
                    href={entity?.instagram_profile}
                    rel="noreferrer"
                  >
                    <FaInstagram size="30" />
                  </a>
                )}
                {entity?.web_profile && (
                  <a
                    target="_blank"
                    href={entity?.web_profile}
                    rel="noreferrer"
                  >
                    <FaLink size="30" />
                  </a>
                )}
              </Center>
            </HStack>
            <Divider />
          </CardHeader>

          <CardBody>
            <HStack pt="6px">
              <TagLeftIcon
                paddingRight="12px"
                w={8}
                h={8}
                as={FaMapMarkerAlt}
              />
              <Skeleton isLoaded={!isLoading} minH={6} w="full">
                <Text> {entity?.address}</Text>
              </Skeleton>
            </HStack>
            <HStack pt="6px">
              <TagLeftIcon
                paddingRight="12px"
                w={8}
                h={8}
                as={CodeOfConductIcon}
              />
              <Skeleton isLoaded={!isLoading} minH={6} w="full">
                <HStack wrap="wrap" flexDir="row">
                  <Text>Tipo de organización:</Text>
                  <Markup html={entity?.type?.name} />
                </HStack>
              </Skeleton>
            </HStack>
          </CardBody>
        </Card>

        {/* Redes */}
        {networks?.length ? (
          <Card color="primary.500">
            <CardHeader>
              <Heading size="md">Redes</Heading>
              <Divider />
            </CardHeader>

            <CardBody>
              <Skeleton isLoaded={!isLoading} minH={12}>
                <HStack gap={3}>
                  {networks?.map(({ id, name, logo_url }) => (
                    <Image
                      key={id}
                      alt={name}
                      src={logo_url}
                      w="48px"
                      h="48px"
                      borderRadius="5px"
                    />
                  ))}
                </HStack>
              </Skeleton>
            </CardBody>
          </Card>
        ) : null}
        {/* Objetivos de desarrollo sustentable */}
        {sdgs?.length ? (
          <Card color="primary.500">
            <CardHeader>
              <Heading size="md">Objetivos de desarrollo sustentable</Heading>
              <Divider />
            </CardHeader>

            <CardBody>
              <Skeleton isLoaded={!isLoading} minH={12}>
                <HStack wrap="wrap">
                  {sdgs?.map((sdg) => {
                    return <Ods sdg={sdg} key={sdg.id} />;
                  })}
                </HStack>
              </Skeleton>
            </CardBody>
          </Card>
        ) : null}
      </>
    </Stack>
  );
};
