import { useCallback } from 'react';
import { Tab } from './models';
import { useDispatch, useMappedState } from './store';
import { IState } from './store';

export function useTab(
  index: number
): {
  tab: Tab;
  updateTab: (body: string) => void;
  removeTab: () => void;
  moveTab: (newIndex: number) => void;
} {
  const tab = useMappedState(
    useCallback((state: IState) => state.tabs[index], [index])
  );
  const { key } = tab;

  const dispatch = useDispatch();
  const updateTab = useCallback(
    ({ key, body }): { key: string; body: string } =>
      dispatch({ type: 'UPDATE_TAB', index, key, body }),
    [key]
  );
  const removeTab = useCallback(() => dispatch({ type: 'REMOVE_TAB', index }), [
    key,
  ]);
  const moveTab = useCallback(
    (toIndex: number) =>
      dispatch({ type: 'MOVE_TAB', fromIndex: index, toIndex }),
    [key]
  );
  return { tab, updateTab, removeTab, moveTab };
}
