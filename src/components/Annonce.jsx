import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom"; // Hooks pour récupérer les paramètres de l'URL et naviguer entre les routes
import annonces from "../data/annonces.json"; // Importation des données des annonces depuis un fichier JSON
import '../styles/annonce.scss'; // Importation des styles pour cette page spécifique
import Rating from './Stars'; // Composant pour afficher les étoiles de notation
import Carrousel from './Carrousel'; // Composant pour afficher un carrousel d'images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importation de Font Awesome pour les icônes
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Importation des icônes spécifiques pour les chevrons (flèches haut/bas)

// Fonction pour trouver une annonce spécifique par son ID
const findAnnonceId = (id) => {
    return annonces.find((annonce) => annonce.id === id);
}

const Annonce = () => {
    const { id } = useParams(); // Récupération de l'ID de l'annonce depuis l'URL via les paramètres
    const navigate = useNavigate(); // Hook pour rediriger l'utilisateur en cas de problème
    const annonce = findAnnonceId(id); // Recherche de l'annonce dans les données en fonction de l'ID

    // États locaux pour ouvrir/fermer la description et les équipements
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la description
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false); // État pour gérer l'ouverture/fermeture des équipements

    // Utilisation de useEffect pour vérifier si l'annonce existe et rediriger si elle n'existe pas
    useEffect(() => {
        if (!annonce) { // Si aucune annonce n'est trouvée
            navigate('/error'); // Redirection vers la page d'erreur
        }
    }, [annonce, navigate]); // Dépendances : useEffect se déclenche si l'annonce ou navigate changent

    // Si l'annonce n'est pas trouvée, on retourne null (ne rien afficher)
    if (!annonce) {
        return null;
    }

    // Fonctions pour ouvrir/fermer les sections Description et Équipements
    const toggleDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen); // Inverse l'état de la description (ouvert/fermé)
    };

    const toggleEquipments = () => {
        setIsEquipmentsOpen(!isEquipmentsOpen); // Inverse l'état des équipements (ouvert/fermé)
    };

    // Séparation du prénom et du nom de l'hôte (utilisé pour l'affichage plus bas)
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

            {/* Section pour la description et les équipements avec effet d'ouverture/fermeture */}
            <div className="collapse-box">
                <div className="collapse_container">
                    {/* Titre pour la section description avec un bouton pour ouvrir/fermer */}
                    <div className="layout-collapse-2" onClick={toggleDescription}>
                        Description
                        <FontAwesomeIcon icon={isDescriptionOpen ? faChevronUp : faChevronDown} className={`chevron ${isDescriptionOpen ? 'up' : 'down'}`} />
                    </div>
                    {/* Contenu de la description qui s'affiche ou se cache selon l'état */}
                    <div className={`layout-content-collapse ${isDescriptionOpen ? 'open' : ''}`}>
                        <p>{annonce.description}</p>
                    </div>
                </div>

                <div className="collapse_container">
                    {/* Titre pour la section équipements avec un bouton pour ouvrir/fermer */}
                    <div className="layout-collapse-2" onClick={toggleEquipments}>
                        Équipements
                        <FontAwesomeIcon icon={isEquipmentsOpen ? faChevronUp : faChevronDown} className={`chevron ${isEquipmentsOpen ? 'up' : 'down'}`} />
                    </div>
                    {/* Liste des équipements qui s'affiche ou se cache selon l'état */}
                    <div className={`layout-content-collapse ${isEquipmentsOpen ? 'open' : ''}`}>
                        <ul>
                            {annonce.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Annonce;
