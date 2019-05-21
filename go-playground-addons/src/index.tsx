import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tabs from './components/Tabs';
import { initStore, StoreContext } from './store';
import { codeRepo } from './repository';
import { Editor } from './editor';
import { initDOM } from './dom';

initDOM();
const store = initStore(codeRepo.load());
new Editor(store);

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Tabs />
  </StoreContext.Provider>,
  document.getElementById('tabs')
);
