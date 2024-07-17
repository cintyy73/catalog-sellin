import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { MdClose, MdSearch } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import { Select } from "chakra-react-select";

import {
  Button,
  ButtonGroup,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

import { Filter, Meta } from "@/types";

import { useFilters } from "@/hooks/useFilters";
import { initialFilter } from "@/utils/constant";

interface filterProps {
  meta: Meta;
  setMeta: Dispatch<SetStateAction<Meta>>;
}

export const Filters = ({ meta, setMeta }: filterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchParams, setSearchParams] = useSearchParams();
  const { product_types, entity_types } = useFilters();

  const [filter, setFilter] = useState<Filter>({
    category: searchParams.get("category") || "",
    title: searchParams.get("title") || "",
    description: searchParams.get("description") || "",
    product_types: searchParams.get("product_types") || "",
  });

  useEffect(() => {
    setMeta({ ...filter, page: 1 });
    // Desactivar regla eslint porque solo quiero que se ejecute una vez
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    e.preventDefault();

    const { name, value } = e.target as HTMLSelectElement | HTMLInputElement;
    setFilter({ ...filter, [name]: value });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    let filteredFilter = {};

    setMeta({ ...filter, page: 1 });

    filteredFilter = Object.fromEntries(
      Object.entries(filter).filter(([, value]) => value !== "")
    );
    setSearchParams(filteredFilter);
    onClose();
  };

  const filterClean = () => {
    setFilter(initialFilter);
    setMeta({ ...initialFilter, page: 1 });
    setSearchParams({});
  };

  return (
    <>
      <ButtonGroup
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="flex-end"
        bg="white"
        pb={{ base: "4" }}
        py={{ md: "4" }}
        gap={{ base: "2", md: "0" }}
        spacing={{ base: "full", md: "4" }}
      >
        {(meta.page > 1 ||
          meta.category ||
          meta.title ||
          meta.description ||
          meta.product_types ) && (
          <Button
            rightIcon={<MdClose size={22} />}
            variant="solid"
            colorScheme="gray"
            onClick={filterClean}
          >
            Eliminar búsqueda
          </Button>
        )}
        <Button onClick={onOpen} rightIcon={<MdSearch size={22} />}>
          Búsqueda avanzada
        </Button>
      </ButtonGroup>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Búsqueda avanzada</DrawerHeader>

          <DrawerBody>
            <Stack
              as="form"
              onSubmit={handleSearch}
              direction="column"
              spacing={4}
              h="100%"
              justifyContent="space-between"
              py={3}
            >
              <Stack gap={6}>
                {/* Tipo de producto */}
                <FormControl>
                  <FormLabel>Tipo de producto</FormLabel>
                  <Select
                    colorScheme="primary"
                    size="sm"
                    isDisabled={!product_types.length}
                    options={product_types.map((value) => ({
                      label: value.charAt(0).toUpperCase() + value.slice(1),
                      value,
                    }))}
                    defaultValue={
                      filter.product_types
                        ? filter.product_types.split(",").map((type) => ({
                            label: type.charAt(0).toUpperCase() + type.slice(1),
                            value: type,
                          }))
                        : []
                    }
                    onChange={(data) => {
                      setFilter({
                        ...filter,
                        product_types:
                          data?.map((i) => i.value).join(",") || "",
                      });
                    }}
                    placeholder="Seleccionar..."
                    isMulti
                  /></FormControl>
                {/* Tipo de Organización */}
                <FormControl>
                  <FormLabel>Tipo de Organización</FormLabel>
                  <Select
                    colorScheme="primary"
                    size="sm"
                    name="category"
                    options={entity_types.map((type) => ({
                      label: type.name,
                      value: type.id,
                    }))}
                    defaultValue={
                      filter.category !== ""
                        ? {
                            label: entity_types.find(
                              (type) => String(type.id) === filter.category
                            )?.name,
                            value: Number(filter.category),
                          }
                        : null
                    }
                    onChange={(data) => {
                      setFilter({
                        ...filter,
                        category: String(data?.value) || "",
                      });
                    }}
                    placeholder="Seleccionar..."
                    isDisabled={!entity_types.length}
                  />
                </FormControl>
                {/* Título */}
                <FormControl>
                  <FormLabel>Título</FormLabel>
                  <Input
                    placeholder="Título de la publicación"
                    value={filter.title}
                    onChange={handleChange}
                    name="title"
                    size="sm"
                  />
                </FormControl>

                {/* Descripción */}
                <FormControl>
                  <FormLabel>Descripción</FormLabel>
                  <Input
                    placeholder="Palabras claves"
                    value={filter.description}
                    onChange={handleChange}
                    name="description"
                    size="sm"
                  />
                </FormControl>
              </Stack>
              <ButtonGroup display="grid" gridTemplateColumns="repeat(2,1fr)">
                <Button
                  type="button"
                  rightIcon={<MdClose size={20} />}
                  variant="solid"
                  onClick={onClose}
                >
                  Cerrar
                </Button>
                <Button rightIcon={<MdSearch size={20} />} type="submit">
                  Buscar
                </Button>
              </ButtonGroup>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
