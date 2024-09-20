import { Navigate } from 'react-router-dom';
import { localStorageKey } from '@/features/utils';

export function Home() {
  const defaultPath = localStorage.getItem(localStorageKey.authToken)
    ? '/todo-list'
    : '/sign-in';

  return <Navigate replace to={defaultPath} />;
}
