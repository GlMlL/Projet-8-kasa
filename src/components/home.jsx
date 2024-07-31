import React from 'react';
import '../styles/home.scss';
import '../styles/annonces.scss';
import '../styles/annonce.scss';
import FicheLogement from "../pages/fiche-logement";
import annonces from "../data/annonces.json";

const Home = () => {
    return (
        <div className="Home">
            <div className="Banner">
                <img src={`${process.env.PUBLIC_URL}/images/Image_source_1.jpg`} alt=" falaise en bord de mer" />
                <h1>Chez vous, et partout ailleurs</h1>
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