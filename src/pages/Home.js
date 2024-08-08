import React from 'react';
import '../styles/home.scss';
import '../styles/annonces.scss';
import '../styles/annonce.scss';
import FicheLogement from "./fiche-logement";
import annonces from "../data/annonces.json";
import imageSource2 from '../assets/images/Image-source-2.jpg'

const Home = () => {
    return (
        <div className="Home">
            <div className="Banner">
                <img src={imageSource2} alt=" falaise en bord de mer" />
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