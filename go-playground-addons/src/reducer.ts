import { Action } from './actions';
import { IState, INITIAL_STATE } from './store';

export default function reducer(state: IState = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case 'ENABLE_TABS': {
      // Unimplemented
      return state;
    }

    case 'DISABLE_TABS': {
      // Unimplemented
      return state;
    }

    case 'ADD_TAB': {
      // Unimplemented
      return state;
    }

    case 'UPDATE_TAB': {
      const tab = {
        ...state.tabs[action.index],
        key: action.key,
        body: action.body,
      };
      state.tabs[action.index] = tab;
      return state;
    }

    case 'REMOVE_TAB': {
      const tabs = [...state.tabs];
      tabs.splice(action.index, 1);
      return { ...state, tabs };
    }

    case 'MOVE_TAB': {
      // Unimplemented
      return state;
    }

    default:
      return state;
  }
}
