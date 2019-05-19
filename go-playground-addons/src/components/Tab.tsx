import React from 'react';
import { useTab } from '../hooks';

type TabProps = {
  index: number;
};

const Tab: React.FC<TabProps> = ({ index }) => {
  const { tab, switchTab, removeTab } = useTab(index);
  const classNames = ['tab'];
  if (tab.active) {
    classNames.push('active');
  }
  return (
    <div className={classNames.join(' ')} onClick={switchTab}>
      <div className="tab-title">{tab.key}</div>
      <div className="tab-delete-button" onClick={removeTab}>
        ×
      </div>
    </div>
  );
};

export default Tab;
