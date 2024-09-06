import React from 'react';
import '../styles/home.scss';
import '../styles/annonces.scss';
import '../styles/annonce.scss';
import FicheLogement from "./fiche-logement";
import annonces from "../data/annonces.json";
import imageSource1 from '../assets/images/Image_source_1.jpg'

const Home = () => {
    return (
        <div className="Home">
            <div className="Banner">
                <img src={imageSource1} alt=" falaise en bord de mer" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="logement">
                <div className="logement-list">
                    <FicheLogement annonces={annonces}/>
                </div>
            </div>

        </div>
    );
};

export default Home;