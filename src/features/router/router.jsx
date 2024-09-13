import { localStorageKey } from '@/features/utils';
import { createBrowserRouter, redirect } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => {
      const defaultPath = localStorage.getItem(localStorageKey.authToken)
        ? '/todo-list'
        : '/sign-in';
      return redirect(defaultPath);
    },
    element: <div>loading...</div>,
  },
  {
    path: '/sign-in',
    lazy: async () => ({
      Component: (await import('@/features/pages/sign-in')).SignIn,
    }),
  },
  {
    path: '/sign-up',
    lazy: async () => ({
      Component: (await import('@/features/pages/sign-up')).SignUp,
    }),
  },
  {
    path: '/todo-list',
    lazy: async () => ({
      Component: (await import('@/features/pages/todo-list')).TodoList,
    }),
  },
]);
