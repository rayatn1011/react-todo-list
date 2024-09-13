import { RouterProvider } from 'react-router-dom';
import { FetcherProvider } from '@/features/fetcher';
import { router } from '@/features/router';
import { StoreProvider } from '@/features/store';
import { GlobalErrorModal } from '@/features/ui/global/error-modal';

function App() {
  return (
    <StoreProvider>
      <FetcherProvider>
        <RouterProvider router={router} />
      </FetcherProvider>
      <GlobalErrorModal />
    </StoreProvider>
  );
}

export default App;
