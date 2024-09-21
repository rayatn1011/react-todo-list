import { Navigate, Outlet } from 'react-router-dom';
import { localStorageKey } from '@/features/utils';

/**
 * @param {object} props
 * @param {'auth' | 'unAuth' | 'public'} props.type
 */
export const RouteProtector = ({ type = 'public' }) => {
  const hasAuthToken = localStorage.getItem(localStorageKey.authToken);

  if (
    (hasAuthToken && type === 'unAuth') ||
    (!hasAuthToken && type === 'auth')
  ) {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
};
