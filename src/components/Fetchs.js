import React from 'react'
import { useEffect,useState } from 'react';
const Fetchs = ({images,setimage}) => {
   const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const truncateTitle = (title) => {
    return title.length > 19 ? title.slice(0, 19) + '...' : title;
  };
  return (
    <div className="image-container"> 
       {images.map((image) => (
        <div className="image-card" key={image.mal_id}>
         <h3>{isSmallScreen ? image.title : truncateTitle(image.title)}</h3>
          <a href={image.url} target='_blank' rel='noopener noreferrer'>
            <img src={image.images.jpg.image_url} alt={image.title} />
          </a>
        </div>
      ))}
      </div>
  )
}

export default Fetchs
