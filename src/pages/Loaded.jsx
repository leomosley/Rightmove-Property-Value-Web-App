import React, { useState } from 'react';
import firebase from "./utils/firebase";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Loads from "./components/Loads";
import "../App.css";

function Loaded() {
    
    return (
        <>
            <Header />
            <main>
                <div id="Loaded">
                    <Loads />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Loaded;