import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/carrousel.scss'; // Assurez-vous que ce chemin est correct

const Carrousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    if (images.length === 0) {
        return <p>No images available</p>; 
    }

    return (
        <div className="carrousel">
            <button className="prev" onClick={prevSlide}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="carrousel-image-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`carrousel-image ${currentIndex === index ? 'active' : ''}`}
                    />
                ))}
            </div>
            <button className="next" onClick={nextSlide}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <div className="carrousel-counter">
                {currentIndex + 1}/{images.length}
            </div>
        </div>
    );
};

export default Carrousel;