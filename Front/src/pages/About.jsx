import React from "react";
import Developer1 from "../assets/images/YessineMiled.jpg";
import Developer2 from "../assets/images/MohamedNaouar.jpg";
import Developer3 from "../assets/images/MazenSghaier.jpg";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import './about.css';

const About = () => {
    return (
        <div className='about'>
        <Header></Header>
        <div className="about-container">
            <h1>About Go Ma Ville</h1>
            <p>Go Ma Ville is a website that helps you discover your city, Monastir, by providing information about all the destinations in Monastir. We aim to make it easy for you to plan your next trip or adventure in your city. </p>
            <h2>Meet the Developers</h2>
            <div className="developers-container">
                <div className="developer">
                    <img src={Developer1} alt="Developer 1" />
                    <h3>Yessine Miled</h3>
                    <p>Yessine is a front-end developer with experience in ReactJS, a JavaScript library for building user interfaces. He specializes in creating reusable UI components, and has a strong understanding of web development concepts and best practices. He is also an expert in HTML, CSS, and JavaScript and has a keen eye for design which makes him able to create visually appealing layouts.</p>
                </div>
                <div className="developer">
                    <img src={Developer2} alt="Developer 2" />
                    <h3>Mohamed Naouar</h3>
                    <p>Mohamed is a back-end developer with experience in Django and Python. He specializes in building efficient and scalable server-side web applications. He is well-versed in database management, API development, and server-side logic. He is also an expert in Python and has a good understanding of web development concepts and best practices.</p>
                </div>
                <div className="developer">
                    <img src={Developer3} alt="Developer 3" />
                    <h3>Mazen Sghaier</h3>
                    <p>Mazen is an android developer with experience in React Native. He specializes in building mobile applications for Android using React Native. He has a strong understanding of mobile development concepts and best practices and is an expert in JavaScript, React and Redux. He is also familiar with other mobile development tools and technologies.
                    </p>
</div>
</div>
</div><Footer></Footer></div>
);
};

export default About;