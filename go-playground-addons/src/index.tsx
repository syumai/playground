import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './components/Tabs';
import * as serviceWorker from './serviceWorker';
import { makeStore, StoreContext } from './store';

const store = makeStore();

(() => {
  //   const wrapper = document.getElementById('wrapper');
  //   if (!wrapper) {
  //     return;
  //   }
  //   wrapper.insertAdjacentHTML('afterbegin', '<div id="tabs"></div>');
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <Tabs />
    </StoreContext.Provider>,
    document.getElementById('tabs')
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
})();
