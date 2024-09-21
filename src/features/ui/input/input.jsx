import { forwardRef, useId } from 'react';
import './style.scss';

export const Input = forwardRef(function Input(
  { label, type = 'text', ...rest },
  ref,
) {
  const inputId = useId();
  const placeholder = rest.placeholder ?? `請輸入${label}`;

  return (
    <div className="ui-input">
      <label className="ui-input__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        {...rest}
        ref={ref}
        className="ui-input__input"
        id={inputId}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
});
