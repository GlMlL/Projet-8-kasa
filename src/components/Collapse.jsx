import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/collapse.scss';

export default function Collapse({ label, content }) {
    const [open, setOpen] = useState(false);

    return (
        <div className='collapse_container'>
            <h2 className="layout-collapse-2" onClick={() => setOpen(!open)}>
                {label}
                {/* Ajout de la classe open à l'icône seulement si open est vrai */}
                <FontAwesomeIcon icon={faChevronUp} className={open ? 'chevron open' : 'chevron'} />
            </h2>
            <div className={`layout-content-collapse ${open ? 'open' : ''}`}>
                <p>{content}</p>
            </div>
        </div>
    );
}
