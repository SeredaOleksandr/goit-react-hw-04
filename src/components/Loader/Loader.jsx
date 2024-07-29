import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader({ isLoading }) {
  return (
    <ThreeDots
      visible={isLoading}
      wrapperClass={s.loader}
      ariaLabel="three-dots-loading"
    />
  );
}
