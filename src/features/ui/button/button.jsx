import './style.scss';

/**
 * @param {React.DetailedHTMLProps<
 *   React.ButtonHTMLAttributes<HTMLButtonElement>,
 *   HTMLButtonElement
 * >}
 */
export const Button = ({ children, className = '', ...rest }) => {
  return (
    <button className={`ui-button ${className}`} {...rest}>
      {children}
    </button>
  );
};
