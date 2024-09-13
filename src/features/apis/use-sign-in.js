import { useFetch } from '@/features/fetcher';

/**
 * 使用者登入
 *
 * @param {object} data
 * @param {object} data.user
 * @param {string} data.user.email
 * @param {string} data.user.password
 */
export const useSignIn = (data, ...rest) => {
  const apiUrl = '/users/sign_in';
  const fetchObj = useFetch(apiUrl, {
    method: 'POST',
    data,
    ...rest,
  });

  return fetchObj;
};
