import React from "react"
import { Link } from "react-router-dom";
import { footer } from "../data/Data"
import "./footer.scss"

const Footer = () => {
    return (
        <>
        <footer>
            <div className='container'>
            <div className='box'>
                <div className='logo'>
                <h2>Go Ma Ville</h2>
                <h3>Discover Monastir's hidden gems</h3>
                </div>
            </div>

            {footer.map((val) => (
                <div className='box'>
                <h3>{val.title}</h3>
                <ul>
                    {val.text.map((items) => (
                    <Link to={items.path}><li> {items.list} </li></Link>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </footer>
        <div className='legal'>
            <span>© 2023 Go Ma Ville.</span>
        </div>
        </>
    )
}

export default Footer