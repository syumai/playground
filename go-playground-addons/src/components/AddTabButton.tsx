import React from 'react';
import { useTabs } from '../hooks';

const AddTabButton: React.FC = () => {
  const { addTab } = useTabs();
  const addTabWithPrompt = () => {
    const key = window.prompt('Input file name (ex. example/hello.go)');
    if (!key) {
      return;
    }
    let body = '';
    if (key.endsWith('.go')) {
      let packageName = 'main';
      const matched = key.match(/([^/]+?)\/[^/]+\.\w+$/);
      if (matched && matched[1]) {
        packageName = matched[1];
      }
      body = `package ${packageName}\n`;
    }
    addTab({ key, body });
  };
  return (
    <div className="tab-button" onClick={addTabWithPrompt}>
      ＋
    </div>
  );
};

export default AddTabButton;
