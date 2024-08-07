import React, { useState } from 'react';


const Carrousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carrousel">
            <button className="prev" onClick={prevSlide}>❮</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carrousel-image" />
            <button className="next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Carrousel;