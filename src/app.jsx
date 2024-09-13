import { RouterProvider } from 'react-router-dom';
import { useInitFetcher } from '@/fetcher';
import { router } from '@/router';
import { GlobalProvider } from '@/ui-lib';

function App() {
  useInitFetcher();

  return (
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  );
}

export default App;
