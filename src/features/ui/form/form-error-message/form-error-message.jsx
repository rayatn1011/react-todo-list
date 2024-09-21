import { ErrorMessage } from '@hookform/error-message';
import './style.scss';

export const FormErrorMessage = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={({ message }) =>
        message && <p className="from-error-message">{message}</p>
      }
    />
  );
};
