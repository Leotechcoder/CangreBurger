import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './App/store.js';
import App from './App.jsx'
import './globlas.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      
        <App />
    </Provider>,
  </StrictMode>,
)
