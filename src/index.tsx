import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import './styles/main.scss';
import store from './store';
import { Provider } from 'react-redux';
import { QueryProvider } from './providers/QueryProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <QueryProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </Provider>
    </QueryProvider>
  </React.StrictMode>,
);
