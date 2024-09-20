import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary, Home, NotFound, Root } from '@/features/routes';

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorBoundary />,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'sign-in',
        lazy: async () => ({
          Component: (await import('@/features/routes')).SignIn,
        }),
      },
      {
        path: 'sign-up',
        lazy: async () => ({
          Component: (await import('@/features/routes')).SignUp,
        }),
      },
      {
        path: 'todo-list',
        lazy: async () => ({
          Component: (await import('@/features/routes')).TodoList,
        }),
      },
    ],
  },
]);
