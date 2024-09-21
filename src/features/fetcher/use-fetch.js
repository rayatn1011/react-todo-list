import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openErrorModal } from '@/features/store/slices/error-modal';
import { fetcher } from './fetcher';
import { AxiosError } from 'axios';

export const useFetch = (
  url,
  { isInitFetch = false, isOpenErrorModal = true, schema, ...config } = {},
) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(isInitFetch);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const onFetch = useCallback(
    async (values) => {
      try {
        setIsLoading(true);
        setError();

        if (schema) {
          schema.parse({
            ...config.params,
            ...config.data,
            ...values.params,
            ...values.data,
          });
        }

        const response = await fetcher({
          url,
          ...config,
          ...values,
        });
        setData(response.data);
        return response;
      } catch (e) {
        const newError = {
          title: e.response?.data?.message ?? '發生錯誤',
          contents: e.response?.data?.error ?? e.message,
        };
        setError(newError);
        setData();
        if (isOpenErrorModal) {
          dispatch(openErrorModal(newError));
        }
        if (e instanceof AxiosError === false) throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [schema, config, url, isOpenErrorModal, dispatch],
  );

  useEffect(() => {
    if (isInitFetch) {
      onFetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    isSuccess: typeof data !== 'undefined',
    isError: typeof error !== 'undefined',
    data,
    error,
    onFetch,
  };
};
