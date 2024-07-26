import React from 'react';
import{useParams}   from "react-router-dom";
import annonces from "../data/annonces.json";
import '../styles/annonce.scss';

const findAnnonceId =(id) => {
    return annonces.find((annonce) => annonce.id === id);
}
const Annonce = () => {
    const{id} = useParams();
    const annonce = findAnnonceId(id);
    const pictures = annonce.pictures;
    return (
        <div className="Annonce">
            <div className="pics">
            <img src={annonce.cover} alt={annonce.title}/>
            </div>
            <div className="title"> {annonce.title}</div>
            <div className="pictures">
                {pictures.map((picture, index) => {
                    return (
                        <img src={picture} alt={pictures.title} key={picture,index}/>
                    )
                })
                }
            </div>
        </div>
    );
};

export default Annonce;