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
        <article className={`ui-modal ${className}`}>
          <div className={`ui-modal__container ${containerClassName}`}>
            {children}
          </div>
        </article>,
        document.body,
      )}
    </>
  );
};
