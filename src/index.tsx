import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import AppRouter from './router/AppRouter';
import { LanguageProvider } from './contex/LanguageContext';

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
