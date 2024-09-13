import React from 'react';
import background from '../assets/images/Image-source-2.jpg';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import '../styles/about.scss'


const arrayCollapse = [
    {
        id: "Collapse 1",
        label: "Fiabilité",
        content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
        id: "Collapse 2",
        label: "Respect",
        content: "La bienveillance fait partie de nos valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        id: "Collapse 3",
        label: "Service",
        content: "Nos équipes se tiennent à votre disposition pour fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
        id: "Collapse 4",
        label: "Sécurité",
        content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    }
]

export default function About() {
    return (
        <div className='container'>
            <Banner background={background} />
            <div className='layout-about'>
                {arrayCollapse.map(collapse => (
                    <div key={collapse.id} className='about-item'>
                        <Collapse label={collapse.label} content={collapse.content} />
                    </div>
                ))}
            </div>
        </div>
    );
}