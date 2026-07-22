import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../redux/services/userApi";

const UserInfo = () => {
  const { data, isSuccess, error, isLoading, isFetching } = useGetUsersQuery();
  const [
    createUserApi,
    { isSuccess: createUserSuccess, data: createUserData },
  ] = useCreateUserMutation();

  const [deleteUserApi] = useDeleteUserMutation();

  const [updateUserApi] = useUpdateUserMutation();

  console.log({
    data,
    isSuccess,
    error,
    isLoading,
    isFetching,
  });
  const payload = {
    name: "Tejinder",
    id: 1,
  };

  const handleCreateUser = () => {
    createUserApi(payload);
  };

  console.log({
    createUserData,
    createUserSuccess,
  });

  const handleDeleteUser = (id) => {
    deleteUserApi(id);
  };

  const handleUpdateUser = (id) => {
    const usrValue = {
      name: "abc",
      id,
    };
    updateUserApi(usrValue);
  };
  return (
    <>
      {data?.map((data) => (
        <div key={data?.id}>
          <p>{data?.id}</p>
          <p>{data?.name}</p>
          <p>{data?.username}</p>
          <button onClick={() => handleDeleteUser(data?.id)}>Delete</button>
          <button onClick={() => handleUpdateUser(data?.id)}>
            Update User
          </button>
        </div>
      ))}
      <button onClick={handleCreateUser}>Create user</button>
    </>
  );
};

export default UserInfo;
