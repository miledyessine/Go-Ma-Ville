import React, { useState,useEffect } from 'react';
import './package-selector.scss';
import {useCookies}from "react-cookie";
const PackageSelector = () => {
    
    const [token,setToken]=useCookies(["user-token"]);
    const [responseJson, setResponseJson] = useState();
    const [responsePack, setResponsePack] = useState();
    const [submited, setSubmited] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([
        {restaurant: null, park: null, sitehistorique: null, bar: null}
    ]);
    

    useEffect(() => {
        ChargeDest();
        ChargePack();
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
    const handleChange = (e) => {
        if(e.target.value === "") {
            return;
        }
        let updatedSelectedOptions = {...selectedOptions[0], [e.target.name]: e.target.value};
        setSelectedOptions([updatedSelectedOptions]);
    };
    const handleSubmit = () => {
        const data = {
            restaurant: selectedOptions[0].restaurant,
            park: selectedOptions[0].park,
            sitehistorique: selectedOptions[0].sitehistorique,
            bar: selectedOptions[0].bar
        }
        
        fetch(`http://localhost:8000/package/add_package/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Token ${token['user-token']}`,
            },
            body: JSON.stringify(data),
        });
        setSubmited(true);
        
    };
    const ChargePack = async () => {
        try {
            const response = await fetch('http://localhost:8000/package/get_package/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Token ${token['user-token']}`,
                },
            });
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            setResponsePack(json);
            if(json.length > 0) {setSubmited(true);}
            
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
        <form className="package-selector">
        <label className="package-selector__label">
            Restaurant: 
            <select 
            className="package-selector__select" 
            name="restaurant" 
            onChange={handleChange}>
                <option value="" disabled selected>Select a restaurant</option>
                {responseJson && responseJson.filter(item=>item.category==="CAFE-RESTO").map(item => (
                    <option key={item.name} value={item.name}>
                    {item.name}
                    </option>
                ))}
            </select>
        </label>
        <br />
        <label className="package-selector__label">
            Park:
            <select 
            className="package-selector__select" 
            name="park" 
            onChange={handleChange}>
                <option value="" disabled selected>Select a park</option>
                {responseJson && responseJson.filter(item=>item.category==="PARK").map(item => (
                    <option key={item.name} value={item.name}>
                    {item.name}
                    </option>
                ))}
            </select>
        </label>
        <br />
        <label className="package-selector__label">
            Historic site:
            <select 
            className="package-selector__select" 
            name="sitehistorique" 
            onChange={handleChange}>
                <option value="" disabled selected>Select a historic site</option>
                {responseJson && responseJson.filter(item=>item.category==="SITE HISTORIQUE").map(item => (
                    <option key={item.name} value={item.name}>
                    {item.name}
                    </option>
                ))}
            </select>
        </label>
        <br />
        <label className="package-selector__label">
            Bar:
            <select 
            className="package-selector__select" 
            name="bar" 
            onChange={handleChange}>
                <option value="" disabled selected>Select a bar</option>
                {responseJson && responseJson.filter(item=>item.category==="BAR").map(item => (
                    <option key={item.name} value={item.name}>
                    {item.name}
                    </option>
                ))}
            </select>
        </label>
        <br />
        <button type="submit"  onClick={handleSubmit}>Submit</button>
        </form>

        {
            submited===true?
            <div className='packag content flex mtop'>
            
            <div className='box shadow'>
                <div className='topbtn'>
                </div>
                <h3>Your personal plan</h3>
                <h1 className='priceH'>
                <span>$</span>
                29
                </h1>
                <p>per person</p>

                <ul>
                    <li>
                        <label
                        style={{ background:  "#27ae601f" ,color:  "#27ae60"}}
                        >
                        <i class='fa-solid fa-check'></i>
                        </label>
                        <p>{responsePack&&responsePack[0].restaurant}</p>
                    </li>
                    <li>
                        <label
                        style={{ background:  "#27ae601f" ,color:  "#27ae60"}}
                        >
                        <i class='fa-solid fa-check'></i>
                        </label>
                        <p>{responsePack&&responsePack[0].park}</p>
                    </li>
                    <li>
                        <label
                        style={{ background:  "#27ae601f" ,color:  "#27ae60"}}
                        >
                        <i class='fa-solid fa-check'></i>
                        </label>
                        <p>{responsePack&&responsePack[0].sitehistorique}</p>
                    </li>
                    <li>
                        <label
                        style={{ background:  "#27ae601f" ,color:  "#27ae60"}}
                        >
                        <i class='fa-solid fa-check'></i>
                        </label>
                        <p>{responsePack&&responsePack[0].bar}</p>
                    </li>
                </ul>
                
            </div>
            
        </div>
        :<></>
        }
        
    </>
    );
};

export default PackageSelector;
