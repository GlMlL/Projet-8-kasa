import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/page404.scss';

export default function Error() {
    return (
        <div className='container_error'>
            <h1 className='title_error'>404</h1>
            <p className='subtitle_error'>{`Oups! La page que vous demandez n'existe pas.`}</p>
            <NavLink className="link_error" to="/">{`Retourner sur la page d'accueil`}</NavLink>
        </div>
    );
}