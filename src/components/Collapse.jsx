import { useState } from 'react'; // Importation du hook useState pour gérer l'état local
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importation du composant pour les icônes Font Awesome
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Importation de l'icône flèche vers le haut
import '../styles/collapse.scss'; // Importation des styles spécifiques pour le composant

// Déclaration du composant Collapse
export default function Collapse({ label, content }) {
    const [open, setOpen] = useState(false); // État pour déterminer si le contenu est ouvert (true) ou fermé (false)

    return (
        <div className='collapse_container'> {/* Conteneur principal pour le composant */}
            <h2 className="layout-collapse-2" onClick={() => setOpen(!open)}> {/* Titre cliquable qui inverse l'état open */}
                {label} {/* Affichage du label passé en prop */}
                {/* Affichage de l'icône de la flèche ; change de classe si open est vrai pour appliquer des styles différents */}
                <FontAwesomeIcon icon={faChevronUp} className={open ? 'chevron open' : 'chevron'} />
            </h2>
            <div className={`layout-content-collapse ${open ? 'open' : ''}`}> {/* Contenu qui s'affiche ou se cache */}
                <p>{content}</p> {/* Affichage du contenu passé en prop */}
            </div>
        </div>
    );
}
