import s from './ImageCard.module.css';

const ImageCard = ({
  user: { name: userName },
  urls: { regular: modalUrl, small: previewUrl },
  description,
  likes,
  openModal,
}) => {
  const handleOpenModal = () => {
    openModal(modalUrl, description, userName, likes);
  };

  return (
    <>
      <li className={s.card}>
        <img src={previewUrl} alt={description} onClick={handleOpenModal} />
      </li>
    </>
  );
};

export default ImageCard;
