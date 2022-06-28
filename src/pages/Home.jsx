import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import "../App.css";

function Home() {

    const bannerImage = "https://media.rightmove.co.uk/hero_image.jpg";
    
    return (
        <>
            <Header />
            <main>
                <div id="home">
                    <img className="banner" alt="Banner" src={bannerImage}></img>
                    <Form />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;