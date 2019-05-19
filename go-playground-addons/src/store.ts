import { createStore, Store } from 'redux';
import { create } from 'redux-react-hook';
import { Action } from './actions';
import reducer from './reducer';
import { TabFile, Tab } from './models';

export type IState = {
  files: TabFile[];
  tabs: Tab[];
  tabsEnabled: boolean;
};

export const INITIAL_STATE: IState = {
  files: [],
  tabs: [],
  tabsEnabled: false,
};

export function makeStore(): Store<IState, Action> {
  return createStore(reducer, INITIAL_STATE);
}

export const { StoreContext, useDispatch, useMappedState } = create<
  IState,
  Action,
  Store<IState, Action>
>();
