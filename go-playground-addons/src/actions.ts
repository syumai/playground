import { TabFile, Tab } from './models';

export type Action =
  | {
      type: 'ENABLE_TABS';
    }
  | {
      type: 'DISABLE_TABS';
    }
  | {
      type: 'CREATE_FILE';
      key: string;
    }
  | {
      type: 'UPDATE_FILE';
      key: string;
      body: string;
    }
  | {
      type: 'ADD_TAB';
      file: TabFile;
    }
  | {
      type: 'REMOVE_FILE';
      key: string;
    }
  | {
      type: 'REMOVE_TAB';
      key: string;
    }
  | {
      type: 'MOVE_TAB';
      index: number;
    };
