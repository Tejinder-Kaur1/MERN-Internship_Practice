import { useSelector } from "react-redux";

function DisplayData() {
  const data = useSelector((state) => state.form.submittedData);

  if (!data) return <p>No data exist</p>;
  return (
    <>
      <div>
        <p>Name is: {data.name}</p>
        <p>Email is: {data.email}</p>
        <p>Age is: {data.age}</p>
      </div>
    </>
  );
}
export default DisplayData;
