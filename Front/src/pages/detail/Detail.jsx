import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './detail.scss';

import StarRating from '../../components/star-rating/StarRating';

import {useCookies} from 'react-cookie';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


const Detail = () => {
    const {id}=useParams();
    const [item, setItem] = useState({});

    const [token,setToken]=useCookies(["user-token"]);

    useEffect(() => {
        ChargeDest();
    }, []);
    const {category}=useParams();

    const ChargeDest = async () => {
        try {
            const dest = {
                id: id,
            };
            const response = await fetch('http://localhost:8000/destintion/getid/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(dest) 
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
                                    <span className="genres__item">{item.category}</span>
                                </div>
                                <div className='type flex'>
                                    <span style={{ background: item.type === "Close" ? "#ff98001a" : "#25b5791a", color: item.type === "Open" ? "#25b579" : "#ff9800" }}>{item.type}</span>
                                </div>
                                
                                <div className="infos">
                                    <h2>Rate it :<StarRating rating={rated}/></h2>
                                <div className="section__header">
                                        <h2>Description :</h2>
                                    </div>
                                    <p className="overview">{item.description}</p>
                                    <div className="section__header">
                                        <h2>Location :</h2>
                                    </div>
                                    <p className="overview">{item.location}</p>
                                </div>
                            </div>
                        </div>
                        <Footer></Footer>
                    </>
                )
            }
        </>
    );
}

export default Detail;
