import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Home from './components/home';
import About from './pages/About';
import Annonce from "./components/Annonce";
import Error from './components/error';
import {Footer} from "./components/footer";

function MyComponent() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/annonce/:id" element={<Annonce />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default MyComponent;