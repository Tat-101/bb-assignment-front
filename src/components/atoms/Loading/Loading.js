import PropTypes from 'prop-types';

const Loading = ({ text = 'Loading...' }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
};

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
