import React, { useState } from "react";
import "./header.css";
import { nav } from "../data/Data";
import { Link } from "react-router-dom";
import {useCookies}from "react-cookie";



const Header = () =>  {
    
    const [navList, setNavList] = useState(false);
    const [token,setToken,removeToken] =useCookies(["user-token"]);

    const logout = () => {
        console.log("logout");
        removeToken("user-token", {path: '/'});
    }


    return (
        <> 
            <header>
                <div className='container flex'>
                <Link to="/"><div className='logo'>
                    <h2>Go Ma Ville</h2>
                </div></Link>
                <div className='nav'>
                    <ul className={navList ? "small" : "flex"}>
                    {nav.map((list, index) => (
                        <li key={index}>
                        { <Link to={list.path}>{list.text}</Link>}
                    
                        </li>
                    ))}
                    </ul>
                </div>
                <div className='button flex'>
                    <button className='btnLogout' onClick={logout}>
                    <i className='fa fa-sign-out'></i> LogOut
                    </button>
                </div>

                <div className='toggle'>
                    <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header;
