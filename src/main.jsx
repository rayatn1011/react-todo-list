import './assets/css/reset.scss';
import './assets/css/base.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
