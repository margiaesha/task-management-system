import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
      
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div>
    <img src='https://softaid.com.au/wp-content/uploads/2023/01/Softaid-technology-logo.png'  className="logo"></img>
      <h1 className="text-5xl font-bold my-txt" >Welcome To Our Task Management System</h1>
   
        
      <Link to="/signup" className="btn btn-primary hero-btn">Sign up </Link>
      <Link to="/login" className="btn btn-primary">Log in</Link>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;