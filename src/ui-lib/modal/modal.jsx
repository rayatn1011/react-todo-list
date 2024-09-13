import { createPortal } from 'react-dom';
import './style.scss';

export const Modal = ({
  isOpen,
  children,
  className = '',
  containerClassName = '',
}) => {
  if (!isOpen) return null;
  return (
    <>
      {createPortal(
        <article className={`modal ${className}`}>
          <div className={`modal__container ${containerClassName}`}>
            {children}
          </div>
        </article>,
        document.body,
      )}
    </>
  );
};
