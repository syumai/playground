import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './components/Tabs';
import { initStore, StoreContext } from './store';
import repo from './repository';
import { Editor } from './editor';

const store = initStore(repo.load());
new Editor(store);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Tabs />
  </StoreContext.Provider>,
  document.getElementById('tabs')
);
