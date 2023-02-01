import React from "react"
import { Link } from "react-router-dom";
import { featured } from "../data/Data"

const FeaturedCard = () => {
    return (
        <>
            <div className='content grid5 mtop'>
                {featured.map((items, index) => (
                <div className='box' key={index}>
                    <Link to={"/services/"+items.name}>
                    <img src={items.cover} alt='' />
                    <h4>{items.name}</h4>
                    <label>{items.total}</label>
                </Link></div>
                ))}
            </div>
        </>
    )
}

export default FeaturedCard;