import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Cards from './Cards';

const HeroSection = () => {
  const images = [
    "https://m.media-amazon.com/images/I/61P7hqIHrdL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div
        className="relative w-full h-full bg-cover"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, transition: 'background-image 0.3s ease-in-out' }}
      />
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 hover:border-solid">
          <IconButton onClick={prevImage} className="pointer-events-auto h-[500px]">
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <div className='flex gap-1'>
            <Cards/>
        </div>


        <div className="absolute right-0 top-0 bottom-0">
          <IconButton onClick={nextImage} className="pointer-events-auto h-full">
            <ChevronRightIcon />
          </IconButton>
        </div>
      
    
      </div>
      
    </div>
  );
};

export default HeroSection;
