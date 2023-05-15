import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import signup from "../../../images/signup.png"
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
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
               <header className="header">Signin Your Account</header>
               <header className="subHeader">Welcome to <b>Softaid TMS! </b> Please Enter your Details</header>

               <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
   
  
  
<input {...register("Uemail")}  type="email"  placeholder="Your email" className="input input-bordered input-primary w-full max-w-xs my-2 mx-2"  />
  <input {...register("Uemail")}  type="password"  placeholder="Type password" className="input input-bordered input-primary w-full max-w-xs my-2 mx-2"  />


  <p>{data}</p>
  
  <button type="submit" className="btn btn-primary my-4 my-submit">Submit</button>

</form>
<p>
  <Link to="/signup" >Don't have an account? <span style={{color
:"#4406CB", fontWeight:"bold"}}>Sign up</span> </Link>
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

export default Login;