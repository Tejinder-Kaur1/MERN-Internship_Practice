import { useFormik } from "formik"
import * as Yup from 'yup';

const LogIn_Form = () => {
  const validation=useFormik({
    initialValues:{
     password:"",
      email:"",
    },
  validationSchema:Yup.object({
    email:Yup.string()
    .required("Email is required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,"Write email properly"),
    password:Yup.string().required("Password is required").matches(/[A-Z]/,"one uppercase is reeq")
    .matches(/[a-z]/,"One small letter ")
    .min(2,"Min two  digits must be there")

    
}),


onSubmit:((val)=>{
  console.log("val",{val})
}),
  })
  return (
    <>
    <form onSubmit={validation.handleSubmit}>

      <input type="password" placeholder="Enter Password" name="password" onChange={validation.handleChange} onBlur={validation.handleBlur}/><br/>
      {validation.touched.email && validation.errors.email ? <p style={{color:"red"}}> {validation.errors.email}</p> : null}
      <input type="email" placeholder="Enter Email" name="email" onChange={validation.handleChange} onBlur={validation.handleBlur}/><br/>
      {validation.touched.password && validation.errors.password ? <p style={{color:"red"}}>{validation.errors.password }</p> : null}
      <button type="submit">Submit</button>

      
    </form>
      
    </>
  )
}

export default  LogIn_Form
