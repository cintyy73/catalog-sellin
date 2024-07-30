import { Meta, Product, ProductWithSdgs, Response, Sdg } from "@/types";

import { api } from "@/utils/axios";

export const fetchProducts = async (meta = {} as Meta) => {
  const {
    category = "",
    description = "",
    page = 1,
    title = "",
    product_types = "",
  } = meta;

  return api
    .get<Response<Product[]>>("/catalogs", {
      params: {
        "page[number]": page,
        "filter[withTitle]": title,
        "filter[withDescription]": description,
        "filter[inEntityType]": category === "0" ? "" : category,
        "filter[product_types]": product_types,
        // "filter[networks]": 39,
        include: "networks",
      },
    })
    .then(({ data }) => data);
};

export const fetchProduct = async (id?: string): Promise<ProductWithSdgs> => {
  if (!id) return Promise.reject("No id provided");

  const [product, sdgs] = await Promise.all([
    api.get<Response<Product>>(`catalogs/${id}/?include=networks`),
    api.get<Response<Sdg[]>>(`entity/${id}/sdgs`),
  ]);

  return {
    ...product.data.data,
    sdgs: sdgs.data.data,
  };
};
