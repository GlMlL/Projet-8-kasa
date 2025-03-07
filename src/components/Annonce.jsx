import React, { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import annonces from "../data/annonces.json"; // Importation des données des annonces
import '../styles/annonce.scss'; // Importation des styles spécifiques à la page d'annonce
import Rating from './Stars'; // Composant pour afficher la note sous forme d'étoiles
import Carrousel from './Carrousel'; // Composant pour afficher un carrousel d'images
import Collapse from './Collapse'; // Importation du composant Collapse

// Fonction pour trouver une annonce spécifique par son ID
const findAnnonceId = (id) => {
    return annonces.find((annonce) => annonce.id === id); // Recherche de l'annonce par ID
}

const Annonce = () => {
    const { id } = useParams(); // Récupération de l'ID de l'annonce depuis l'URL
    const navigate = useNavigate(); // Hook pour naviguer entre les routes
    const annonce = findAnnonceId(id); // Recherche de l'annonce en fonction de l'ID

    // Utilisation de useEffect pour vérifier si l'annonce existe
    useEffect(() => {
        if (!annonce) { // Si l'annonce n'existe pas
            navigate('/error'); // Redirection vers la page d'erreur
        }
    }, [annonce, navigate]); // Dépendances : useEffect se déclenche si l'annonce ou navigate changent

    // Si l'annonce n'est pas trouvée, retourner null pour ne rien afficher
    if (!annonce) {
        return null;
    }

    // Séparation du prénom et du nom de l'hôte
    const [firstName, lastName] = annonce.host.name.split(' ');

    return (
        <div className="Annonce">
            {/* Carrousel pour afficher les images de l'annonce */}
            <Carrousel images={annonce.pictures} />

            <div className="info-container">
                <div className="left-block">
                    {/* Titre et localisation de l'annonce */}
                    <div className="announcement-title">{annonce.title}</div>
                    <div className="location">{annonce.location}</div>
                    {/* Affichage des tags associés à l'annonce */}
                    <div className="tags">
                        {annonce.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>

                <div className="right-block">
                    <div className="host-info">
                        {/* Informations sur l'hôte */}
                        <div className="name-container">
                            <span className="first-name">{firstName}</span>
                            <span className="last-name">{lastName}</span>
                        </div>
                        {/* Affichage de l'image de l'hôte */}
                        <img src={annonce.host.picture} alt="Host" className="host-picture" />
                    </div>
                    {/* Composant pour afficher la note sous forme d'étoiles */}
                    <div className="rating-section">
                        <Rating value={annonce.rating} />
                    </div>
                </div>
            </div>

            <div className="collapse-box">
                {/* Utilisation du composant Collapse pour afficher la description */}
                <Collapse label="Description" content={annonce.description} />
                {/* Utilisation du composant Collapse pour afficher les équipements */}
                <Collapse label="Équipements" content={
                    <ul>
                        {annonce.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li> // Affichage de chaque équipement dans une liste
                        ))}
                    </ul>
                } />
            </div>
        </div>
    );
};

export default Annonce; // Exportation du composant Annonce
