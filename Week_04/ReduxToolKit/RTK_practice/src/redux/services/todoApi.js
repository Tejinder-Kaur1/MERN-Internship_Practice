import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    headers: {
      "content-type": "application/json",
    },
  }),
  tagTypes: ["TodoList"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos?_limit=5",
      providesTags: ["TodoList"],
    }),

    createTodos: builder.mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["TodoList"],
    }),

    deleteTodos: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TodoList"],
    }),

    updateTodos: builder.mutation({
      query: ({ id, ...todo }) => ({
        // user : {id,...todo}
        url: `todos/${id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["TodoList"],
    }),
  }),
});
export const {
  useGetTodosQuery,
  useCreateTodosMutation,
  useDeleteTodosMutation,
  useUpdateTodosMutation,
} = todoApi;
