import { createBrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@/features/routes/error-boundary';
import { Home } from '@/features/routes/home';
import { NotFound } from '@/features/routes/not-found';
import { Root } from '@/features/routes/root';
import { RouteProtector } from '@/features/routes/route-protector';

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
        element: <RouteProtector type="unAuth" />,
        children: [
          {
            path: 'sign-in',
            lazy: async () => ({
              Component: (await import('@/features/routes/sign-in')).SignIn,
            }),
          },
          {
            path: 'sign-up',
            lazy: async () => ({
              Component: (await import('@/features/routes/sign-up')).SignUp,
            }),
          },
        ],
      },
      {
        element: <RouteProtector type="auth" />,
        children: [
          {
            path: 'todo-list',
            lazy: async () => ({
              Component: (await import('@/features/routes/todo-list')).TodoList,
            }),
          },
        ],
      },
    ],
  },
]);
