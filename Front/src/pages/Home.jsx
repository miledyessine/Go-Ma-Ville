import React from 'react';
import HeroSlide from '../components/hero-slide/HeroSlide';
import Header from '../components/header/Header';
import Featured from '../components/featured/Featured';
import Recent from '../components/recent/Recent';
import Location from '../components/location/Location';
import Pack from '../components/pack/Pack';
import Footer from '../components/footer/Footer';



const Home = () => {
    return (
        <>
            <Header></Header>
            <HeroSlide></HeroSlide>
            <Featured></Featured>
            <Recent></Recent>
            <Location></Location>
            <Pack></Pack>
            <Footer></Footer>
        </>
        
    );
}

export default Home;