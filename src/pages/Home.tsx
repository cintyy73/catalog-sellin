import { useState } from "react";
import { useQuery } from "react-query";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Box, Center, Stack } from "@chakra-ui/react";

import { Meta } from "@/types";

import { ProductCard, ProductSkeleton } from "@/components/Card";
import { Empty } from "@/components/Empty";
import { Filters } from "@/components/Filters";
import { GoogleMap } from "@/components/maps/GoogleMap";
import { Pagination } from "@/components/Pagination";
// import { Slider } from "@/components/slider/Slider";
import { fetchProducts } from "@/services/product.service";
import { createArray } from "@/utils/globals";

const mapSize = {
  width: "100%",
  height: "15rem",
  borderRadius: "12px",
};

function Home() {
  const [meta, setMeta] = useState<Meta>({} as Meta);
  const { isLoading, data, isFetching } = useQuery(
    ["products", meta],
    () => fetchProducts(meta),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const entities = data?.data.map(({ entity }) => {
    const { bussiness_name, fantasy_name, location_lat, location_lng, id } =
      entity;
    return {
      id: id,
      bussinessName: bussiness_name,
      fantasyName: fantasy_name,
      lat: location_lat,
      lng: location_lng,
    };
  });

  return (
    <Stack
      bg="secondary"
      minHeight="100vh"
      justifyContent="space-between"
      spacing={6}
    >
      {/* <Slider /> */}

      <GoogleMap markers={entities} styles={mapSize} />

      <Stack minH="50vh">
        <Box
          position={{
            base: "static",
            md: "sticky",
          }}
          top={{
            base: "auto",
            md: "5px",
          }}
          zIndex={{
            base: "auto",
            md: "1",
          }}
        >
          <Filters meta={meta} setMeta={setMeta} />
        </Box>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="15px">
            {isFetching &&
              createArray(9).map((item) => <ProductSkeleton key={item} />)}
            {!isFetching &&
              !!data?.data?.length &&
              data.data.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </Masonry>
        </ResponsiveMasonry>

        {!isLoading && !data?.data?.length && (
          <Empty
            title="No hay Productos / Servicios"
            description="Sin resultados para mostrar."
          />
        )}
      </Stack>
      <Center>
        {!!data?.data?.length && (
          <Pagination
            meta={meta}
            currentPage={meta.page}
            setMeta={setMeta}
            total={data.data.length}
            per_page={data.meta.per_page}
          />
        )}
      </Center>
    </Stack>
  );
}

export default Home;
