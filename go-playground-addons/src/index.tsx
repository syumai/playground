import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './components/Tabs';
import { initStore, StoreContext } from './store';
import { concatTabs } from './helpers';

const codeArea = document.getElementById('code') as HTMLInputElement;
const store = initStore(codeArea.value);
const { tabs, activeTabIndex } = store.getState();
const codeAddonArea = document.getElementById('codeAddon') as HTMLInputElement;
const activeTab = tabs[activeTabIndex];
codeAddonArea.value = activeTab.body;
codeAddonArea.addEventListener('change', () => {
  const { tabs, activeTabIndex } = store.getState();
  const activeTab = tabs[activeTabIndex];
  store.dispatch({
    type: 'UPDATE_TAB',
    index: activeTabIndex,
    key: activeTab.key,
    body: codeAddonArea.value,
  });
  codeArea.value = concatTabs(tabs);
});

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Tabs />
  </StoreContext.Provider>,
  document.getElementById('tabs')
);
