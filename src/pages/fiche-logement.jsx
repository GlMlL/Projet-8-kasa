import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Composant qui affiche une liste de logements sous forme de liens cliquables
const FicheLogement = ({ annonces }) => {
    return (
        // Utilisation de la méthode map pour parcourir le tableau d'annonces
        annonces.map((annonce) => (
            // Chaque annonce est un lien vers une page spécifique avec l'ID de l'annonce dans l'URL
            <Link to={`/annonce/${annonce.id}`} className="logement-fiche" key={annonce.id}>
                {/* Affichage de l'image de couverture de l'annonce */}
                <img src={annonce.cover} alt={annonce.title} />

                {/* Affichage du titre de l'annonce */}
                <h3>{annonce.title}</h3>
            </Link>
        ))
    );
};

// Validation des props avec PropTypes
FicheLogement.propTypes = {
    // 'annonces' doit être un tableau et est requis pour le bon fonctionnement du composant
    annonces: PropTypes.array.isRequired
};

export default FicheLogement;
