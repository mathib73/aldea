import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StyledEngineProvider } from '@mui/material';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
