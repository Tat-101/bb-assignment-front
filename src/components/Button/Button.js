import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  onClick,
  className,
  type = 'button',
  children,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
