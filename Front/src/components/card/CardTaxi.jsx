import React from "react";
import './card.scss';
import profileTaxi from "./../../assets/images/profileTaxi.jpg"

const CardTaxi = ({ lista }) => {
    return (
        <>
        <div className='content grid3 mtop'>
            {lista && lista.map((val, index) => {
            const { id,nom_taxi,num_taxi,numero } = val
                
            return (
                <div className='box shadow category' key={index}>
                        <div className='img'>
                            <img src={profileTaxi} alt='as' />
                        </div>
                        <div className='text'>
                            <div className='type flex'>
                                <span style={{ background:  "#25b5791a", color:  "#25b579" }}>{num_taxi}</span>
                                <i className='fa fa-heart'></i>
                            </div>
                            <h4>{nom_taxi}</h4>
                            <p>
                            <i className='fa fa-location-dot'></i> Monastir
                            </p>
                        </div>
                    
                    <div className='button flex'>
                        <div>
                            <label htmlFor=''>1.6 /person</label>
                        </div>
                        <span ><i class="fa-solid fa-phone" style={{color:"#000"}}></i> {numero}</span>
                    </div>
                
                </div>
            )
            })}
        </div>
        </>
    )
}

export default CardTaxi;