import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:3000';

export const baseAPI = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Schedule'],
  endpoints: () => ({})
})