 
import React, { useState} from 'react';
import logo from '../../images/erp-system-icon.png'
import './Header.css'
const Header= (props) =>{
    
    const [menu, changeMenu] = useState("itg-menu");

    function toggleclass(){
        if(menu!="open"){
            changeMenu("open") 
            props.changeStyleMenu("itg-nav-r")
        } 
        else{
            changeMenu("itg-menu") 
            props.changeStyleMenu("itg-nav")
        }
    }
    return(
        <header   className="itg-header" >
                <div className="itg-logo">
                    <img src={logo} width="50" height="50" alt="Smiley face"/>
                    <span>  ITGsoftware </span>
                </div>
                <div className="link-pages">
                    <div className={menu} onClick={toggleclass}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li> <a href="/login">login</a></li>
                        <li><a href="#">main cart</a> </li>

                    </ul> 
                    <div className="itg-search"> 
                        
                        <span className="fa fa-search itg-icon-search"></span> 
                        <input type="text"  placeholder="Search..."/>
                        
                    </div>
                    
                </div>
            </header>
          
    );
    
}
export default Header