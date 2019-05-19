import React, { useCallback } from 'react';
import Tab from './Tab';
import { IState, useMappedState } from '../store';

const Tabs: React.FC = () => {
  const { tabCount } = useMappedState(
    useCallback(
      (state: IState) => ({
        tabCount: state.tabs.length,
      }),
      []
    )
  );

  return (
    <>
      {new Array(tabCount).fill(null).map((_, index) => (
        <Tab index={index} key={index} />
      ))}
    </>
  );
};

export default Tabs;
