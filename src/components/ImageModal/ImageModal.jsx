import s from './ImageModal.module.css';
import Modal from 'react-modal';
import { FaHeart } from 'react-icons/fa';
import { MdPhotoCamera } from 'react-icons/md';
Modal.setAppElement('#root');

const ImageModal = ({
  isOpen,
  onCloseModal,
  modalSrc,
  modalAlt,
  modalAuthor,
  modalLikes,
}) => {
  return (
    <Modal
      className={s.modal}
      overlayClassName={s.overlay}
      // closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      contentLabel="image lightbox"
    >
      <div>
        <img src={modalSrc} alt={modalAlt} />
        <ul className={s.photoDetails}>
          <li>
            <MdPhotoCamera />
            {modalAuthor}
          </li>
          <li>
            <FaHeart />
            {modalLikes}
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default ImageModal;
