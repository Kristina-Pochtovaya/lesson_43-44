import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './app';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
