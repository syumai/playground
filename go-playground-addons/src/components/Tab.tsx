import React from 'react';
import { useTab } from '../hooks';

type TabProps = {
  index: number;
};

const Tab: React.FC<TabProps> = ({ index }) => {
  const { tab, removeTab } = useTab(index);
  return (
    <div className="tab">
      <div className="tab-title">{tab.key}</div>
      <div className="tab-delete-button" onClick={removeTab}>
        ×
      </div>
    </div>
  );
};

export default Tab;
