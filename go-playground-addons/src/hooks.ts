import { useCallback } from 'react';
import { Tab } from './models';
import { useDispatch, useMappedState } from './store';
import { codeAddonRepo } from './repository';
import { IState } from './store';

export function useTabs(): {
  tabs: Tab[];
  addTab: (tab: Tab) => void;
} {
  const tabs = useMappedState(
    useCallback((state: IState) => [...state.tabs], [])
  );

  const dispatch = useDispatch();

  const addTab = useCallback(
    ({ key, body }) => {
      dispatch({ type: 'ADD_TAB', key, body });
    },
    [dispatch]
  );
  return { tabs, addTab };
}

export function useTab(
  index: number
): {
  tab: Tab;
  switchTab: () => void;
  updateTab: (body: string) => void;
  removeTab: () => void;
  moveTab: (newIndex: number) => void;
} {
  const tab = useMappedState(
    useCallback(
      (state: IState) => ({
        ...state.tabs[index],
        active: state.activeTabIndex === index,
      }),
      [index]
    )
  );

  const dispatch = useDispatch();

  const switchTab = useCallback(() => {
    codeAddonRepo.save(tab.body);
    dispatch({ type: 'SWITCH_TAB', index });
  }, [dispatch, index, tab.body]);

  const updateTab = useCallback(
    ({ key, body }): { key: string; body: string } =>
      dispatch({ type: 'UPDATE_TAB', index, key, body }),
    [dispatch, index]
  );

  const removeTab = useCallback(() => dispatch({ type: 'REMOVE_TAB', index }), [
    dispatch,
    index,
  ]);

  const moveTab = useCallback(
    (toIndex: number) =>
      dispatch({ type: 'MOVE_TAB', fromIndex: index, toIndex }),
    [dispatch, index]
  );
  return { tab, switchTab, updateTab, removeTab, moveTab };
}
