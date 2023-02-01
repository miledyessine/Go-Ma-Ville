import React from "react"
import { Link } from "react-router-dom"
import { pack } from "../data/Data"

const PackCard = () => {
    return (
        <>
        <div className='content flex mtop'>
            {pack.map((item, index) => (
            <div className='box shadow' key={index}>
                <div className='topbtn'>
                <button className='btn3'>{item.best}</button>
                </div>
                <h3>{item.plan}</h3>
                <h1 className='priceH' style={{color:"#000"}}>
                <span>$</span>
                {item.price}
                </h1>
                <p>{item.ptext}</p>

                <ul>
                {item.list.map((val) => {
                    const { icon, text, change } = val
                    return (
                    <li>
                        <label
                        style={{
                            background: change === "color" ? "#dc35451f" : "#27ae601f",
                            color: change === "color" ? "#dc3848" : "#27ae60",
                        }}
                        >
                        {icon}
                        </label>
                        <p>{text}</p>
                    </li>
                    )
                })}
                </ul>
                <button
                className='btn5'
                style={{
                    background: item.plan === "Standard" ? "#27ae60" : "#fff",
                    color: item.plan === "Standard" ? "#fff" : "#27ae60",
                }}
                ><Link to="/services/Package">
                Start {item.plan}</Link>
                </button>
            </div>
            ))}
        </div>
        </>
    )
}

export default PackCard