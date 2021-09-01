import React, { useState } from 'react';
import Header from '../componenents/Home/Header';
import Feature from '../componenents/Home/Feature';
import About from '../componenents/Home/About';
import aboutimage from '../images/about.png';

const Home = () => {

    return (
        <>
            <Header />
            <Feature />
            <About image={aboutimage} title='Comes with all your need to manage your Work' button='Sign Up' />
        </>
    )
}

export default Home
