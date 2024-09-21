import { z } from 'zod';
import { useFetch } from '@/features/fetcher';

export const signInSchema = z.object({
  user: z.object({
    email: z.string().email({ message: '輸入正確的 email 格式' }),
    password: z.string().min(6, { message: '輸入至少 6 個字元' }),
  }),
});

/** 使用者登入 */
export const useSignIn = (config) => {
  const apiUrl = '/users/sign_in';
  const fetchObj = useFetch(apiUrl, {
    ...config,
    method: 'POST',
    schema: signInSchema,
  });

  return fetchObj;
};
