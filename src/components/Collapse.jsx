import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/collapse.scss'



export default function Collapse({ label, content }) {
    const [open, setOpen] = useState(false);

    return (
        <div className='collapse_container'>
            <h2 className="layout-collapse-2" onClick={() => setOpen(!open)}>
                {label} <FontAwesomeIcon icon={faChevronUp} className={open ? 'open' : ''} />
            </h2>
            {open && (
                <div className="layout-content-collapse">
                    <div className='layout_housing'>
                        <p>{content}</p>
                    </div>
                </div>
            )}
        </div>
    );
}