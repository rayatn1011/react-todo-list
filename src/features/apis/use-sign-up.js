import { z } from 'zod';
import { useFetch } from '@/features/fetcher';

export const signUpSchema = z.object({
  user: z.object({
    email: z.string().email({ message: '輸入正確的 email 格式' }),
    nickname: z.string().min(1, { message: '輸入至少 1 個字元' }),
    password: z.string().min(6, { message: '輸入至少 6 個字元' }),
  }),
});

/** 使用者註冊 */
export const useSignUp = (config) => {
  const apiUrl = '/users';
  const fetchObj = useFetch(apiUrl, {
    ...config,
    method: 'POST',
    schema: signUpSchema,
  });

  return fetchObj;
};
