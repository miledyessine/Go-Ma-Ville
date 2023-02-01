import React from "react";
import Heading from './../heading/Heading';
import "./featured.scss";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
    return (
        <>
        <section className='featured background'>
            <div className='container'>
                <Heading title='Destination Types' subtitle='Find All Types of Activities.' />
                <FeaturedCard />
            </div>
        </section>
        </>
    )
}

export default Featured;