import { Outlet } from 'react-router-dom';
import { FetcherProvider } from '@/features/fetcher';
import { StoreProvider } from '@/features/store';
import { GlobalErrorModal } from '@/features/ui/global/error-modal';

export function Root() {
  console.log('Root: rendered');
  return (
    <StoreProvider>
      <FetcherProvider>
        <Outlet />
      </FetcherProvider>
      <GlobalErrorModal />
    </StoreProvider>
  );
}
