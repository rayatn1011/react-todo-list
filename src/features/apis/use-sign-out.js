import { useFetch } from '@/features/fetcher';
import { localStorageKey } from '@/features/utils';

/** 使用者登出 */
export const useSignOut = () => {
  const apiUrl = '/users/sign_out';
  const fetchObj = useFetch(apiUrl, {
    method: 'DELETE',
    params: {
      Authorization: localStorage.getItem(localStorageKey.authToken),
    },
  });

  return fetchObj;
};
