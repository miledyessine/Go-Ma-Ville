import React, { useEffect, useState } from 'react';
import Heading from './../heading/Heading';
import "./recent.scss";
import Card from "../card/Card";


const Recent = () => {

    const [responseJson, setResponseJson] = useState();
    

    useEffect(() => {
        ChargeDest();
    }, []);

    const ChargeDest = async () => {
        try {
            const response = await fetch('http://localhost:8000/destintion/get_all/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            setResponseJson(json);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <section className='recent padding'>
                <div className='container'>
                <Heading title='The best locations' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
                <Card lista={responseJson && responseJson.slice(0,4)}/>
                </div>
            </section>
        </>
    )
}

export default Recent;