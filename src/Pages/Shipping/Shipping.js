import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';


const Shipping = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const {user} = useAuth();
  
    return (
        <div>
            <form style={{margin:"10px 20px",padding:"20px"}} onSubmit={handleSubmit(onSubmit)}>
      
      <input style={{marginBottom:"10px"}} defaultValue={user.displayName} {...register("example")} />
       <br />
      
      <input style={{marginBottom:"10px"}} {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <input type="submit" />
    </form>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;