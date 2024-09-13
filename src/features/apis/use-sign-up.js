import { useFetch } from '@/features/fetcher';

/**
 * 使用者註冊
 *
 * @param {object} data
 * @param {object} data.user
 * @param {string} data.user.email
 * @param {string} data.user.nickname
 * @param {string} data.user.password
 */
export const useSignUp = (data) => {
  const apiUrl = '/users';
  const fetchObj = useFetch(apiUrl, {
    method: 'POST',
    data,
  });

  return fetchObj;
};
