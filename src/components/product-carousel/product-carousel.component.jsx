import React from 'react';
import ImageGallery from 'react-image-gallery';


function ProductCarousel({images}) {

    const imagesForCarousel = images.map((image) => {
        return {
            original: image,
            thumbnail: image.replace('300', '100').replace('350', '150')
        }
    })

    return (
        <ImageGallery items={imagesForCarousel} lazyLoad={true} autoPlay={true} >
            
        </ImageGallery >
    );
}

export default ProductCarousel;