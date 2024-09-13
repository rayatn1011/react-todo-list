import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/sign-up',
    async lazy() {
      const { SignUp } = await import('@/pages/sign-up');
      return { Component: SignUp };
    },
  },
]);
