import { useRef, useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';

function App() {
  const [images, setImages] = useState([]);
  const galleryRef = useRef();
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isError, setIsError] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [modalData, setModalData] = useState({
    isShown: false,
    url: '',
    alt: '',
    author: '',
    likes: '',
  });

  const handleSearchSubmit = newQuery => {
    console.log('Search query:', newQuery);
    setIsError(false);
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setHasSearched(false);
  };

  // const openModal = (url, alt, author, likes) => {
  //   setModal;
  // };

  return (
    <>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Loader isLoading={isLoading} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} ref={galleryRef} />
      )}
    </>
  );
}

export default App;
