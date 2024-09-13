import { useCallback, useEffect, useState } from 'react';
import { fetcher } from './fetcher';
import { useGlobalContext } from '@/ui-lib';

export const useFetch = (
  url,
  { isInitFetch = false, isOpenErrorModal = true, ...fetcherConfig } = {},
) => {
  const { globalDispatch } = useGlobalContext();

  const [isLoading, setIsLoading] = useState(isInitFetch);
  const [data, setData] = useState();
  const [error, setError] = useState();

  const onFetch = useCallback(
    async (values) => {
      try {
        setIsLoading(true);
        setError();
        const response = await fetcher({
          url,
          ...fetcherConfig,
          ...values,
        });
        setData(response.data);
      } catch (e) {
        const newError = {
          message: e?.response.data?.message ?? e.message,
          data: e?.response.data?.error ?? '',
        };
        setError(newError);
        setData();
        if (isOpenErrorModal) {
          globalDispatch({
            type: 'openModal',
            data: newError,
          });
        }
      } finally {
        setIsLoading(false);
      }
    },
    [fetcherConfig, globalDispatch, isOpenErrorModal, url],
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
