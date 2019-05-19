import React, { useCallback } from 'react';
import { useMappedState } from 'redux-react-hook';
import Tab from './Tab';
import { IState } from '../store';

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
    <div className="tabs">
      {new Array(tabCount).fill(null).map((_, index) => (
        <Tab index={index} key={index} />
      ))}
    </div>
  );
};

export default Tabs;
