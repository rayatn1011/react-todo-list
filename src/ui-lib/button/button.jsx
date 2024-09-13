import './style.scss';

export const Button = ({ children, className = '', ...rest }) => {
  return (
    <button className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
};
