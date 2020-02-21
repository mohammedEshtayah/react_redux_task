import React, { Component } from 'react';  
import './navigate.css'
const navigate= () =>{
    return(  
        <nav className="itg-nav" >
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Product list</a></li>
                <li><a href="#">product delete</a></li>
                <li><a href="#">AboutUs</a></li>
                <li className="notborder"><a href="#">contect</a></li>
            </ul>
         
    
        </nav>
          
    );
    
}
export default navigate