import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import { Music } from "@/app/types/music";

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

function isHydrateAction(action: Action): action is PayloadAction<any> {
  return action.type === HYDRATE;
}

export const musicApiSlice = createApi({
  reducerPath: "musicApi",
  tagTypes: ["Music"],
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/api` }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getAllMusics: builder.query({
      query: () => ({
        url: "/musics",
        method: "GET",
      }),
      providesTags: [{ type: "Music", id: "LIST" }],
      keepUnusedDataFor: 2,
    }),
  }),
});

export const { useGetAllMusicsQuery } = musicApiSlice;
