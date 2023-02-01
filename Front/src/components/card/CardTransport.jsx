import React from "react";
import { Link } from "react-router-dom";
import './card.scss';

const CardTransport = ({ lista }) => {
    return (
        <>
        <div className='content grid4 mtop'>
            {lista && lista.map((val, index) => {
            const { id,cover, location, name, price, availability ,map_link,link} = val
                
            return (
                <div className='box shadow category' key={index}>

                    <Link to={"/transport/"+name+"/"+id}>
                        <div className='img'>
                            <img src={cover} alt='as' />
                        </div></Link>
                        <div className='text'>
                            <div className='type flex'>
                                <span style={{ background: availability === "Unavailable" ? "#ff98001a" : "#25b5791a", color: availability === "Available" ? "#25b579" : "#ff9800" }}>{availability}</span>
                                <i className='fa fa-heart'></i>
                            </div>
                            <h4>{name}</h4>
                            <p><a href={map_link}>
                            <i className='fa fa-location-dot'></i> {location}
                            </a></p>
                        </div>
                    
                    <div className='button flex'>
                        <div>
                            <label htmlFor=''>{price} /person</label>
                        </div>
                        <span >{name}</span>
                    </div>
                
                </div>
            )
            })}
        </div>
        </>
    )
}

export default CardTransport;