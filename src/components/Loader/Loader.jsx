import { InfinitySpin } from 'react-loader-spinner';

const Loader = ({ isLoading }) => {
  return (
    <InfinitySpin
      visible={isLoading}
      width="200"
      color="#4fa94d"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default Loader;
