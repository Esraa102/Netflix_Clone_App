import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/auth" }),
  endpoints: (builder) => ({
    createNewUser: builder.mutation({
      query: (userInfo) => ({
        url: "register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: userInfo,
      }),
    }),
    logInUser: builder.mutation({
      query: (userInfo) => ({
        url: "login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: userInfo,
      }),
    }),
    logOutUser: builder.mutation({
      query: () => ({
        url: "logout",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useLogInUserMutation,
  useCreateNewUserMutation,
  useLogOutUserMutation,
} = authApi;
