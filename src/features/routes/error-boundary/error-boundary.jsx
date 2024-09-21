import { useNavigate, useRouteError } from 'react-router-dom';
import { Button } from '@/features/ui';
import './style.scss';

export const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const stringifyError = JSON.stringify(
    error,
    Object.getOwnPropertyNames(error),
  );

  const handleClick = () => {
    navigate('/');
  };

  return (
    <article className="error-boundary">
      <h1 className="error-boundary__title">哇...哪裡出了問題</h1>
      <p className="error-boundary__content">{stringifyError}</p>
      <Button onClick={handleClick}>回首頁</Button>
    </article>
  );
};
