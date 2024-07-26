import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FicheLogement = ({ annonces }) => {
    return (
        annonces.map((annonce) => (
            <Link to={`/annonce/${annonce.id}`} className="logement-fiche" key={annonce.id}>
                <img src={annonce.cover} alt={annonce.title} />
                <h3>{annonce.title}</h3>
            </Link>
        ))
    );
};

FicheLogement.propTypes = {
    annonces: PropTypes.array.isRequired
};

export default FicheLogement;