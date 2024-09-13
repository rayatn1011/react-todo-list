import { useId } from 'react';
import './style.scss';

export const Input = ({ label, type = 'text', ...rest }) => {
  const inputId = useId();
  const placeholder = rest.placeholder ?? `請輸入${label}`;
  return (
    <div className="input">
      <label className="input__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        {...rest}
        className="input__input"
        id={inputId}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
