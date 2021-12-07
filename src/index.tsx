import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import Store from './redux/Store';

import 'swiper/swiper-bundle.min.css'
import 'swiper/modules/navigation/navigation.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/effect-fade/effect-fade.min.css';
import 'swiper/modules/grid/grid.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ Store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);