import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={s.loadMoreBtn}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
