import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openErrorModal } from '@/features/store/slices/error-modal';
import { fetcher } from './fetcher';

export const useFetch = (
  url,
  { isInitFetch = false, isOpenErrorModal = true, ...fetcherConfig } = {},
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
        const response = await fetcher({
          url,
          ...fetcherConfig,
          ...values,
        });
        setData(response.data);
      } catch (e) {
        const newError = {
          title: e?.response.data?.message ?? e.message,
          contents: e?.response.data?.error ?? '',
        };
        setError(newError);
        setData();
        if (isOpenErrorModal) {
          dispatch(openErrorModal(newError));
        }
      } finally {
        setIsLoading(false);
      }
    },
    [dispatch, fetcherConfig, isOpenErrorModal, url],
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
