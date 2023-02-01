import React from 'react';

import './hero-slide.scss';


import SwiperCore,{Autoplay} from 'swiper';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';

import Heading from './../heading/Heading';

import image1 from './../../assets/images/monastir1.jpg';
import image2 from './../../assets/images/monastir2.jpg';
import image3 from './../../assets/images/monastir3.jpg';


const HeroSlide = () => {

    SwiperCore.use([Autoplay]);

    const imgs=[image1,image2,image3];

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidespreview={1}
                autoplay={{delay: 6000}}
            >
                {
                    
                    imgs.map((item,i)=>(
                        <SwiperSlide key={i}>
                                <HeroSlideItem item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}


const HeroSlideItem=props=>{

    return(
        <div className={`hero `}
        style={{backgroundImage:`url(${props.item})`}}
        >
            <div className="container">
                <Heading title='Explore Monastir top destinations' subtitle='Mer douce et dômes blancs comme neige des mosquées' />
            </div>
        </div>
    )
}

export default HeroSlide;