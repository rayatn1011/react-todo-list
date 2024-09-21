import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { openErrorModal } from '@/features/store/slices/error-modal';
import { fetcher } from './fetcher';
import { localStorageKey } from '../utils';

let init = false;
export const FetcherProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    init = true;
    const initInterceptors = () => {
      fetcher.interceptors.request.use(
        function (config) {
          return config;
        },
        function (error) {
          return Promise.reject(error);
        },
      );

      fetcher.interceptors.response.use(
        function (response) {
          return response;
        },
        function (error) {
          switch (error.status) {
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
    if (!init) initInterceptors();
  }, [dispatch]);

  return <>{children}</>;
};
