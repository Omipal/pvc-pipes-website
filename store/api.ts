// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

// export const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `${STRAPI_URL}/api`,
//   }),
//   tagTypes: ["Product", "Category", "Article"],
//   endpoints: () => ({}), // 👈 abhi empty (STEP 4 me fill karenge)
// });

// store/api.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "@/types/product";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${STRAPI_URL}/api`,
  }),
  endpoints: (builder) => ({
    searchProducts: builder.query<Product[], string>({
      query: (search) =>
        `/products?filters[name][$containsi]=${search}&populate=images`,
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useSearchProductsQuery } = api;
