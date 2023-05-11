
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='h-[800px] flex justify-center items-center'>

      
        <div>
            <h2 className='text-4xl my-4'>Sign Up</h2>
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
    
   
    <input {...register("firstName")}  type="text"  placeholder="First name" className="input input-bordered input-primary w-full max-w-xs my-4"  />
    <select {...register("category", { required: true })} className="select select-primary w-full max-w-xs my-4">
  <option disabled selected value="">Select Department</option>
  <option value="A">Web Development</option>
  <option value="B">Content</option>
  <option value="C">SEO</option>
  <option value="D">Email Marketing</option>
  <option value="E"> PPC</option>
  <option value="F">HR</option>
  <option value="G">Graphics</option>
  <option value="H">UI/UX</option>
</select>
 
    <p>{data}</p>
   
  
    <button type="submit" className="btn btn-wide btn-primary my-4">Submit</button>

  </form>
        </div>
        </div>
    );
};

export default Signup;