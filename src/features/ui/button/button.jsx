import './style.scss';

export const Button = ({ children, className = '', ...rest }) => {
  return (
    <button className={`ui-button ${className}`} {...rest}>
      {children}
    </button>
  );
};
