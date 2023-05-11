import React from 'react';
import Home from '../Componenets/Home';
import Login from '../Componenets/Login/Login/Login';
import { Outlet } from 'react-router';


const Main = () => {
    return (
        <div>
    <Outlet></Outlet>
      
    
        </div>
    );
};

export default Main;