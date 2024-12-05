import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousClick = () => {
    const previousIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(previousIndex);
  };

  const handleNextClick = () => {
    const nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className="image-gallery">
      <button className="nav-button" onClick={handlePreviousClick}>❮</button>
      <img src={images[currentImageIndex]} alt="Gallery" className="gallery-image" />
      <button className="nav-button" onClick={handleNextClick}>❯</button>
    </div>
  );
};

export default ImageGallery;
