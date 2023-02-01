import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './detail.scss';

import StarRating from '../../components/star-rating/StarRating';

import {useCookies} from 'react-cookie';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import CardTaxi from '../../components/card/CardTaxi';


const DetailTaxi = () => {
    const {id}=useParams();
    const [item, setItem] = useState({});
    const [responseTaxis, setResponseTaxis] = useState();
    const [token,setToken]=useCookies(["user-token"]);

    useEffect(() => {
        ChargeTrans();
        ChargeTaxis();
    }, []);
    
    const ChargeTrans = async () => {
        try {
            const response = await fetch('http://localhost:8000/transport/get_trans_id/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({id})
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            setItem(json[0]);
        } catch (error) {
            console.error(error);
        }
    };

    const ChargeTaxis = async () => {
        try {
            const response = await fetch('http://localhost:8000/taxi/get_taxi/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            setResponseTaxis(json);
        } catch (error) {
            console.error(error);
        }
    };

    const rated=(rate)=> {
        const rateInfo={
            data:{
                rate,
                destId:item.id
            }
        }
    }

    return (
        <>
            {
                item && (
                    <>
                        <Header></Header>
                        <div className="banner" style={{backgroundImage: `url(${item.cover})`}}></div>
                        <div className="mb-3 dest-content container">
                            <div className="dest-content__poster">
                                <div className="dest-content__poster__img" style={{backgroundImage: `url(${item.cover})`}}></div>
                            </div>
                            <div className="dest-content__info">
                                <h1 className="title">
                                    {item.name}
                                </h1>
                                <div className="genres">
                                    <span className="genres__item">Transport</span>
                                </div>
                                <div className='type flex'>
                                    <span style={{ background: item.availability === "Unavailable" ? "#ff98001a" : "#25b5791a", color: item.availability === "Available" ? "#25b579" : "#ff9800" }}>{item.availability}</span>
                                </div>
                                
                                <div className="infos">
                                    <h2>Rate it :<StarRating rating={rated}/></h2>
                                <div className="section__header">
                                        <h2>Description :</h2>
                                    </div>
                                    <p className="overview">{item.link}</p>
                                    <div className="section__header">
                                        <h2>Location :</h2>
                                    </div>
                                    <p className="overview">{item.location}</p>
                                </div>
                            </div>
                        </div>
                        <CardTaxi lista={responseTaxis}></CardTaxi>
                        <Footer></Footer>
                    </>
                )
            }
        </>
    );
}

export default DetailTaxi;
