import { useDispatch, useSelector } from "react-redux";
import { resetForm, submitForm, updateField } from "../redux/Slice/slice";
import DisplayData from "./Display";
// import DisplayData from "./Display";

const Form = () => {
  const dispatch = useDispatch();
  const FormData = useSelector((state) => state.form.formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={FormData.name}
          onChange={(e) =>
            dispatch(
              updateField({ field: e.target.name, value: e.target.value }),
            )
          }
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={FormData.email}
          onChange={(e) =>
            dispatch(
              updateField({ field: e.target.name, value: e.target.value }),
            )
          }
        />
        <input
          type="number"
          placeholder="Enter Age here "
          name="age"
          value={FormData.age}
          onChange={(e) =>
            dispatch(
              updateField({ field: e.target.name, value: e.target.value }),
            )
          }
        />
        <button>Submit Form</button> <br />
        <button onClick={() => dispatch(resetForm())}>Reset Form</button>
        <br />
        <DisplayData />
      </form>
    </>
  );
};

export default Form;
