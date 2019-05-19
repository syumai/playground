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

    case 'CREATE_FILE': {
      // Unimplemented
      return state;
    }

    case 'ADD_TAB': {
      // Unimplemented
      return state;
    }

    case 'REMOVE_FILE': {
      // Unimplemented
      return state;
    }

    case 'REMOVE_TAB': {
      // Unimplemented
      return state;
    }

    case 'MOVE_TAB': {
      // Unimplemented
      return state;
    }

    default:
      return state;
  }
}
