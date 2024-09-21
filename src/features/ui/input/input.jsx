import { useId } from 'react';
import './style.scss';
import { useFormContext } from 'react-hook-form';
import { FormErrorMessage } from '@/features/ui/form/form-error-message/form-error-message';

export const Input = ({ label, type = 'text', name, ...rest }) => {
  const { register } = useFormContext();

  const inputId = useId();
  const placeholder = rest.placeholder ?? `請輸入${label}`;

  return (
    <div className="ui-input">
      <label className="ui-input__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        {...rest}
        {...register(name)}
        className="ui-input__input"
        id={inputId}
        type={type}
        placeholder={placeholder}
      />
      <FormErrorMessage name={name} />
    </div>
  );
};
