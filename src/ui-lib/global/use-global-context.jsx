import { useContext } from 'react';
import { GlobalContext } from './global-context';

export const useGlobalContext = () => {
  const object = useContext(GlobalContext);

  if (!object) throw new Error('must be used within a Provider');
  return object;
};
