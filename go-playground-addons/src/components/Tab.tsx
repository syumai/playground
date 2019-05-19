import React from 'react';

const Tab: React.FC = ({ title }) => {
  return (
    <div className="tab">
      <div className="tab-title">{title}</div>
      <div className="tab-delete-button">×</div>
    </div>
  );
};
Tab.contextTypes;

export default Tab;
