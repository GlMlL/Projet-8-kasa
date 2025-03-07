import React from 'react';
import '../styles/home.scss';   // Import des styles spécifiques à la page d'accueil
import '../styles/annonces.scss'; // Import des styles spécifiques à la liste d'annonces
import '../styles/annonce.scss';  // Import des styles pour une annonce individuelle
import FicheLogement from "./fiche-logement"; // Import du composant FicheLogement
import annonces from "../data/annonces.json"; // Import des données des annonces à partir du fichier JSON

// Définition du composant Home, qui représente la page d'accueil
const Home = () => {
    return (
        <div className="Home"> {/* Conteneur principal de la page d'accueil */}

            {/* Section de la bannière avec un titre accrocheur */}
            <div className="Banner">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            {/* Section contenant la liste des logements */}
            <div className="logement">

                {/* Conteneur de la liste des annonces */}
                <div className="logement-list">
                    {/* Affichage des fiches des logements en passant les données JSON comme prop */}
                    <FicheLogement annonces={annonces}/>
                </div>

            </div>
        </div>
    );
};

// Export du composant Home pour l'utiliser dans d'autres parties de l'application
export default Home;
