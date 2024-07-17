import { useEffect, useState } from "react";

import { CatalogsFilters } from "@/types";

import { api } from "@/utils/axios";


interface Data {
  entity_types: CatalogsFilters["entity_types"];
  product_types: CatalogsFilters["product_types"];
}

export const useFilters = () => {
  const [data, setData] = useState<Data>({
    entity_types: [],
    product_types: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get<Data>("/catalogs/filters");

        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    ...data,
    isLoading,
    error,
  };
};
