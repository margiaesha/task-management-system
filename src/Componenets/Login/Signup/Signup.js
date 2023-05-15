
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import "./Signup.css";
import signup from "../../../images/signup.png"
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
//         <div className='h-[800px] flex justify-center items-center'>

      
//         <div className='auth-form'>
//             <h2 className='text-4xl my-8'>Sign Up</h2>
//             <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
    
   
//     <input {...register("UserName")}  type="text"  placeholder="User name" className="input input-bordered input-primary w-full max-w-xs my-2 mx-2"  />
//     <input {...register("Uemail")}  type="email"  placeholder="Your email" className="input input-bordered input-primary w-full max-w-xs my-2 mx-2"  />
//     <input {...register("Uemail")}  type="email"  placeholder="Your email" className="input input-bordered input-primary w-full max-w-xs my-2 mx-2"  />
    
  
    
//     <select {...register("category", { required: true })} className="select select-primary w-full max-w-xs my-2 mx-2">
//   <option disabled selected value="">Select Department</option>
//   <option value="A">Web Development</option>
//   <option value="B">Content</option>
//   <option value="C">SEO</option>
//   <option value="D">Email Marketing</option>
//   <option value="E"> PPC</option>
//   <option value="F">HR</option>
//   <option value="G">Graphics</option>
//   <option value="H">UI/UX</option>
// </select>
 
//     <p>{data}</p>
   
  
//     <button type="submit" className="btn btn-wide btn-primary my-4">Submit</button>

//   </form>
//   <div className='text-center mt-4 mb-5'>
    
//                 <h5 className='or-text '>or</h5>
//                 <h5 className='text mt-8'>Signin with</h5>
//                 <button className='btn btn-wide btn-primary my-4 mt-2 my-btn'><FaGoogle size='18px' /></button>

//             </div>

//         </div>
//         </div>
<div>

         <div className="LoginPageContainer">
    <div className="LoginPageInnerContainer">
        <div className="ImageContianer">
          
        <img alt='#' src={signup}></img>

        </div>
        <div className="LoginFormContainer">
            <div className="LoginFormInnerContainer">
                <div className="LogoContainer">
                <Link to="/"><img alt='#' src='https://softaid.com.au/wp-content/uploads/2023/01/Softaid-technology-logo.png' className='s-logo' ></img></Link>
                </div>
                <header className="header">Create Your Account</header>
                <header className="subHeader">Welcome to <b>Softaid TMS! </b> Please Enter your Details</header>

                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
    
   
   <input {...register("UserName")}  type="text"  placeholder="User name" className="input input-bordered input-primary w-full max-w-xs my-2 mx-2"  />
<input {...register("Uemail")}  type="email"  placeholder="Your email" className="input input-bordered input-primary w-full max-w-xs my-2 mx-2"  />
   <input {...register("Uemail")}  type="password"  placeholder="Type password" className="input input-bordered input-primary w-full max-w-xs my-2 mx-2"  />
   <select {...register("category", { required: true })} className="select select-primary w-full max-w-xs my-2 mx-2">
  <option disabled selected value="">Select Department</option>
  <option value="A">Web Development</option>
   <option value="B">Content</option>
  <option value="C">SEO</option>
  <option value="D">Email Marketing</option>
   <option value="F">HR</option>
  <option value="H">UI/UX</option>
 </select>
 
   <p>{data}</p>
   
   <button type="submit" className="btn btn-primary my-4 my-submit">Submit</button>
   
 </form>
 <p>
  <Link to="/login" >Already have an account? <span style={{color
:"#4406CB", fontWeight:"bold"}}>Sign in</span> </Link>
</p>
 <div className='text-center mt-4 mb-5 sgf'>
    
 <h5 className='or-text '>or</h5>

 <button className='g-btn my-4'> <FaGoogle  className='me-1' size='27px' style={{color : "#4285F5"}} /> <span style={{color : "#EA4435", fontSize:"20px"}} >o</span><span style={{color : "#FBBC05", fontSize:"20px"}}>o</span><span style={{color : "#4286F4", fontSize:"20px"}}>g</span><span style={{color : "#34A854", fontSize:"20px"}}>l</span><span style={{color : "#EA4335", fontSize:"20px"}}>e</span></button>
 </div>
            </div>
        </div>
    </div>
</div>   
       
</div>
    );
};

export default Signup;