import { z } from 'zod';
import { useFetch } from '@/features/fetcher';
import { localStorageKey } from '@/features/utils';

const signOutSchema = z.object({
  Authorization: z.string().nullable(),
});

/** 使用者登出 */
export const useSignOut = (config) => {
  const apiUrl = '/users/sign_out';
  const fetchObj = useFetch(apiUrl, {
    ...config,
    method: 'DELETE',
    schema: signOutSchema,
    params: {
      Authorization: localStorage.getItem(localStorageKey.authToken),
    },
  });

  return fetchObj;
};
