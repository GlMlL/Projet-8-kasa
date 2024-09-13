import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home';
import About from './pages/About';
import Annonce from "./components/Annonce";
import Error from './pages/Error';
import {Footer} from "./components/Footer";
import './styles/app.scss';

function MyComponent() {
    return (
        <BrowserRouter>
            <div id="content">
                <Header/>

                <main>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/annonce/:id" element={<Annonce/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Routes>
                </main>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default MyComponent;