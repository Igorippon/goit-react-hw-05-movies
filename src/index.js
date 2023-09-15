import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyle';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='goit-react-hw-05-movies'>
      <App />
      <GlobalStyle />
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
