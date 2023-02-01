import React from "react"
import Heading from './../heading/Heading';
import "./pack.scss"
import PackCard from "./PackCard"

const Pack = () => {
    return (
        <>
            <section className='pack padding'>
                <div className='container'>
                <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
                <PackCard />
                </div>
            </section>
        </>
    )
}

export default Pack