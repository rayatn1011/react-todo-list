import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openErrorModal } from '@/features/store/slices/error-modal';
import { fetcher } from './fetcher';
import { localStorageKey } from '../utils';

export const FetcherProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initInterceptors = () => {
      // Add a request interceptor
      fetcher.interceptors.request.use(
        function (config) {
          // Do something before request is sent
          return config;
        },
        function (error) {
          // Do something with request error
          return Promise.reject(error);
        },
      );

      // Add a response interceptor
      fetcher.interceptors.response.use(
        function (response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response;
        },
        function (error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          console.log('error', error);
          switch (error) {
            case 401: {
              dispatch(
                openErrorModal({
                  title: '權限不足',
                  contents: ['點擊確認返回登入頁'],
                  onConfirm: () => {
                    localStorage.removeItem(localStorageKey.authToken);
                    window.location.reload();
                  },
                }),
              );
            }
          }
          return Promise.reject(error);
        },
      );
    };
    initInterceptors();
  }, [dispatch]);

  return <>{children}</>;
};
