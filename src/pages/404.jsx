import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import "../App.css";

function NoPage() {
    return (
        <>
            <Header />
            <main>
                <div id="404">
                    <p>We can't find the page you are looking for. Sorry for the inconvenience.</p>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default NoPage;