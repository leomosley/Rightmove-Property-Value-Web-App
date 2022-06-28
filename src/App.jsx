import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Home from "./pages/Home";
import Loaded from "./pages/Loaded";
import NoPage from "./pages/404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="*" element={<NoPage />} />
                    <Route path="loaded" element={<Loaded />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;