import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import annonces from "../data/annonces.json"; // J'importe les données des annonces à partir du fichier JSON
import '../styles/annonce.scss'; // J'importe les styles spécifiques pour ce composant
import Rating from './Stars'; // J'importe le composant qui gère l'affichage des étoiles
import Carrousel from './Carrousel'; // J'importe le carrousel pour afficher les images de l'annonce

// Cette fonction cherche une annonce par son ID dans le fichier JSON
const findAnnonceId = (id) => {
    return annonces.find((annonce) => annonce.id === id);
}

const Annonce = () => {
    const { id } = useParams(); // J'extrais l'ID de l'annonce depuis l'URL
    const navigate = useNavigate(); // J'utilise useNavigate pour rediriger si l'annonce n'est pas trouvée
    const annonce = findAnnonceId(id); // Je récupère l'annonce correspondante à l'ID
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false); // État pour gérer l'ouverture/fermeture de la description
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false); // État pour gérer l'ouverture/fermeture des équipements

    // Je vérifie si l'annonce existe, sinon je redirige vers une page d'erreur
    useEffect(() => {
        if (!annonce) {
            navigate('/error'); // Redirection vers la page d'erreur si l'annonce n'existe pas
        }
    }, [annonce, navigate]); // Je surveille les changements d'annonce et de navigation

    // Si l'annonce n'existe toujours pas après la vérification, je ne retourne rien (juste au cas où)
    if (!annonce) {
        return null;
    }

    // Fonction pour basculer l'état d'ouverture de la description
    const toggleDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };

    // Fonction pour basculer l'état d'ouverture des équipements
    const toggleEquipments = () => {
        setIsEquipmentsOpen(!isEquipmentsOpen);
    };

    return (
        <div className="Annonce">
    {/* J'affiche le carrousel d'images en passant uniquement les autres images, sans l'image de couverture */}
    <Carrousel images={annonce.pictures} />
            {/* J'affiche le titre de l'annonce et le nom de l'hôte */}
            <div className="title">
                {annonce.title} <span className="host-name">{annonce.host.name}</span>
            </div>
            
            {/* J'affiche la localisation de l'annonce */}
            <div className="location">
                {annonce.location}
            </div>
            
            <div className="flex">
                {/* J'affiche les tags de l'annonce */}
                <div className="tags">
                    {annonce.tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
                
                {/* J'affiche la note de l'annonce avec des étoiles */}
                <div className="rating-section">
                    <Rating value={annonce.rating} />
                </div>
            </div>
            
            {/* J'affiche les sections déroulantes pour la description et les équipements */}
            <div className="collapse-box">
                <div className="collapse_container">
                    {/* Section pour la description */}
                    <div className="layout-collapse-2" onClick={toggleDescription}>
                        Description
                        <span className={`chevron ${isDescriptionOpen ? 'up' : 'down'}`}></span> {/* Je change l'icône en fonction de l'état */}
                    </div>
                    <div className={`layout-content-collapse ${isDescriptionOpen ? 'open' : ''}`}>
                        <p>{annonce.description}</p>
                    </div>
                </div>
                
                <div className="collapse_container">
                    {/* Section pour les équipements */}
                    <div className="layout-collapse-2" onClick={toggleEquipments}>
                        Équipements
                        <span className={`chevron ${isEquipmentsOpen ? 'up' : 'down'}`}></span> {/* Même logique pour les équipements */}
                    </div>
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