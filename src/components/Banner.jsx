import React from 'react';
import PropTypes from 'prop-types';
import '../styles/banner.scss'


export default function Banner({ background, caption }) {
    let lightBanner;

    if (caption) {
        lightBanner = "lighting-percent-40";
    } else {
        lightBanner = "lighting-percent-70";
    }

    return (
        <>
            <figure className="banner-container">
                <img className={lightBanner} src={background} alt="Paysage de Nature" />
                <figcaption>{caption}</figcaption>
            </figure>
        </>
    );
}


Banner.propTypes = {
    background: PropTypes.any, // Validation que background peut être de n'importe quel type
    caption: PropTypes.string, // Validation que caption doit être une chaîne de caractères
}
