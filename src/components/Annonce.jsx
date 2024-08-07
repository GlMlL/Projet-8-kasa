import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import annonces from "../data/annonces.json";
import '../styles/annonce.scss';
import Rating from './Stars';
import Carrousel from './Carrousel';

const findAnnonceId = (id) => {
    return annonces.find((annonce) => annonce.id === id);
}

const Annonce = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const annonce = findAnnonceId(id);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

    useEffect(() => {
        if (!annonce) {
            navigate('/error');
        }
    }, [annonce, navigate]);

    if (!annonce) {
        return null;
    }

    const toggleDescription = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };

    const toggleEquipments = () => {
        setIsEquipmentsOpen(!isEquipmentsOpen);
    };

    return (
        <div className="Annonce">
            <Carrousel images={[annonce.cover, ...annonce.pictures]} />
            <div className="title">
                {annonce.title} <span className="host-name">{annonce.host.name}</span>
            </div>
            <div className="location">
                {annonce.location}
            </div>
            <div className="tags">
                {annonce.tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="rating-section">
                <Rating value={annonce.rating} />
            </div>
            <div className="collapse_container">
                <div className="layout-collapse-2" onClick={toggleDescription}>
                    Description
                    <span className={`chevron ${isDescriptionOpen ? 'up' : 'down'}`}></span>
                </div>
                <div className={`layout-content-collapse ${isDescriptionOpen ? 'open' : ''}`}>
                    <p>{annonce.description}</p>
                </div>
            </div>
            <div className="collapse_container">
                <div className="layout-collapse-2" onClick={toggleEquipments}>
                    Équipements
                    <span className={`chevron ${isEquipmentsOpen ? 'up' : 'down'}`}></span>
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
    );
};

export default Annonce;