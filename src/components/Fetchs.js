import React from 'react'

const Fetchs = ({images,setimage}) => {
  return (
    <div className="image-container"> 
       {images.map((image) => (
        <div className="image-card" key={image.mal_id}>
          <h3>{image.title.length ?image.title.slice(0,19) :image.title}</h3>
          <a href={image.url} target='_blank' rel='noopener noreferrer'>
            <img src={image.images.jpg.image_url} alt={image.title} />
          </a>
        </div>
      ))}
      </div>
  )
}

export default Fetchs
