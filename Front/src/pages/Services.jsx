import React, { useEffect, useState } from 'react';
import './services.css';
import SideBar from '../components/side-bar/SideBar';
import Header from '../components/header/Header';
import Card from '../components/card/Card';
import CardTransport from '../components/card/CardTransport';

import { useParams } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import PackageSelector from '../components/package-selector/PackageSelector';
import { padding } from '@mui/system';

const Services = () => {
    const [responseJson, setResponseJson] = useState();
    const [responseTrans, setResponseTrans] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ChargeDest();
        ChargeTrans();
    }, []);
    const {category}=useParams();

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
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };
    const ChargeTrans = async () => {
        try {
            const response = await fetch('http://localhost:8000/transport/getalltransport/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            setResponseTrans(json);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='service'>
            <Header></Header>
            <div className="row-side">
                <SideBar></SideBar>
                {
                    loading ? (
                        <div>Loading...</div>
                    ) : (
                        category === "Package" ? (
                            <PackageSelector/>
                        ) : category === "Transport" ? (
                            <CardTransport lista={responseTrans}></CardTransport>
                        ) : (
                            <Card lista={category === "All" ? responseJson : responseJson.filter(item => item.category === category)}/>
                        )
                    )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};


export default Services;