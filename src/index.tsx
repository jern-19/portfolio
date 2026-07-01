import ReactDOM from 'react-dom/client';
import App from './src/layouts/HomeLayout';
import './index.css';
import { BrowserRouter } from 'react-router';
import AppRouter from './src/router/AppRouter';
import { LanguageProvider } from './src/contex/LanguageContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <LanguageProvider>
    <AppRouter />
  </LanguageProvider>
  </BrowserRouter>
);


