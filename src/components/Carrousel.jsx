import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/carrousel.scss';

const Carrousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image précédente
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Fonction pour passer à l'image suivante
    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carrousel">
            {/* Affichage de l'image actuelle */}
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carrousel-image" />

            {/* Bouton pour aller à l'image précédente avec un chevron gauche */}
            <div className="left-arrow" onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>

            {/* Bouton pour aller à l'image suivante avec un chevron droit */}
            <div className="right-arrow" onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>

            {/* Affichage du numéro de la slide */}
            <div className="slide-number">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

export default Carrousel;
