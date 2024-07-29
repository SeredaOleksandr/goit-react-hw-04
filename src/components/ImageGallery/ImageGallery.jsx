import { forwardRef } from 'react';
import s from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = forwardRef(({ images, openModal }, ref) => (
  <ul className={s.gallery} ref={ref}>
    {images.map((image, index) => {
      const key = `${image.id}-${index}`;
      return <ImageCard key={key} {...image} openModal={openModal} />;
    })}
  </ul>
));

export default ImageGallery;
