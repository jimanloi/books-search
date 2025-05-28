import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiSlice = createApi({
  reducerPath: "books",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org",
  }),
  endpoints: (builder) => {
    return {
      getBooks: builder.query({
        query: ({ query }) =>
          `/search.json?title=${encodeURIComponent(query)}&limit=50`,
      }),
    };
  },
});

export default apiSlice;
export const { useGetBooksQuery } = apiSlice;
