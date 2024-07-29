import s from './ErrorMessage.module.css';

const ErrorMessage = ({ children }) => {
  return (
    <>
      <p className={s.errorMessage}>{children}</p>
    </>
  );
};

export default ErrorMessage;
