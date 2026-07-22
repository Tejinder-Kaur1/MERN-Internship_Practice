import { useState } from "react";
import {
  useCreateTodosMutation,
  useDeleteTodosMutation,
  useGetTodosQuery,
  useUpdateTodosMutation,
} from "../redux/services/todoApi";

const TodoList = () => {
  const { data, isLoading } = useGetTodosQuery();
  const [createTodoApi, { isLoading: createLoading }] =
    useCreateTodosMutation();
  const [deleteTodoApi, { isLoading: deleteLoading }] =
    useDeleteTodosMutation();
  const [updateTodoApi, { isLoading: updateLoading }] =
    useUpdateTodosMutation();

  const payload = {
    id: 201,
    title: "Hi guys",
  };

  const [selectedId, setSelectedId] = useState("");
  const handleCreateTodo = () => {
    createTodoApi(payload);
  };
  const handleDeleteTodo = (id) => {
    deleteTodoApi(id);
  };

  const handleUpdateTodo = (id) => {
    setSelectedId(id);
    const updateTodo = {
      title: "hiiiiiiiii",
      id,
    };
    updateTodoApi(updateTodo);
  };

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }
  return (
    <>
      {data?.map((data) => (
        <div key={data.id}>
          <h2>The id is:{data?.id}</h2>
          <h2>The UserID is:{data?.userId}</h2>
          <h2>The title is:{data?.title}</h2>
          <button onClick={() => handleDeleteTodo(data?.id)}>
            {selectedId === data?.id && deleteLoading
              ? "Deleting"
              : "Delete"}{" "}
          </button>

          <button onClick={() => handleUpdateTodo(data?.id)}>
            {selectedId === data?.id && updateLoading
              ? "Updating....."
              : "Update"}
          </button>
        </div>
      ))}
      <button onClick={handleCreateTodo}>
        {createLoading ? "loading....." : "create todo"}
      </button>
    </>
  );
};

export default TodoList;
