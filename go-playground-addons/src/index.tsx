import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './components/Tabs';
import { initStore, StoreContext } from './store';

const codeArea = document.getElementById('code') as HTMLInputElement;
const store = initStore(codeArea.value);
const { tabs, activeTabIndex } = store.getState();
codeArea.value = tabs[activeTabIndex].body;

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Tabs />
  </StoreContext.Provider>,
  document.getElementById('tabs')
);
