import React from "react";
import { Link } from "react-router-dom";
import './card.scss';

const Card = ({ lista }) => {
    return (
        <>
        
        <div className='content grid4 mtop'>
            {lista && lista.map((val, index) => {
            const { id,cover, category, location, name, stars, type } = val
            return (
                
                <div className='box shadow category' key={index}>
                    <Link to={"/services/"+category+"/"+id}>
                        <div className='img'>
                            <img src={cover} alt='as' />
                        </div>
                        <div className='text'>
                            <div className='type flex'>
                                <span style={{ background: type === "Close" ? "#ff98001a" : "#25b5791a", color: type === "Open" ? "#25b579" : "#ff9800" }}>{type}</span>
                                <i className='fa fa-heart'></i>
                            </div>
                            <h4>{name}</h4>
                            <p>
                            <i className='fa fa-location-dot'></i> {location}
                            </p>
                        </div>
                    </Link>
                    
                    <div className='button flex'>
                        <div>
                            <label htmlFor=''>{stars} stars</label>
                        </div>
                        <span >{category}</span>
                    </div>
                </div>
            )
            })}
        </div>
        </>
    )
}

export default Card;