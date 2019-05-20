import { Store } from 'redux';
import { IState } from './store';
import { Action } from './actions';
import { concatTabs } from './helpers';
import repo from './repository';
import { Tab } from './models';

export class Editor {
  private el: HTMLInputElement;
  constructor(private store: Store<IState, Action>) {
    const el = document.getElementById('codeAddon') as HTMLInputElement;
    el.value = this.activeTab.body;
    el.addEventListener('change', () => this.save());
    el.addEventListener('keydown', e => {
      if (e.keyCode === 9 && !e.ctrlKey) {
        // tab
        this.insertTabs(1);
        e.preventDefault();
        return false;
      }
      if (e.keyCode === 13) {
        // enter
        if (e.shiftKey) {
          this.save();
          console.log(repo.load());
          const runBtn = document.getElementById('run') as HTMLInputElement;
          runBtn.click();
          e.preventDefault();
          return false;
        }
        if (e.ctrlKey) {
          this.save();
          const fmtBtn = document.getElementById('fmt') as HTMLInputElement;
          fmtBtn.click();
          e.preventDefault();
        } else {
          this.autoindent();
        }
      }
      return true;
    });
    this.el = el;
  }

  private get tabs(): Tab[] {
    const { tabs } = this.store.getState();
    return tabs;
  }

  private get activeTabIndex(): number {
    const { activeTabIndex } = this.store.getState();
    return activeTabIndex;
  }

  private get activeTab(): Tab {
    const { tabs, activeTabIndex } = this.store.getState();
    return tabs[activeTabIndex];
  }

  save() {
    this.store.dispatch({
      type: 'UPDATE_TAB',
      index: this.activeTabIndex,
      key: this.activeTab.key,
      body: this.el.value,
    });
    repo.save(concatTabs(this.tabs));
  }

  insertTabs(n: number) {
    const start = this.el.selectionStart as number;
    const end = this.el.selectionEnd as number;
    const v = this.el.value;
    let u = v.substr(0, start);
    for (let i = 0; i < n; i++) {
      u += '\t';
    }
    u += v.substr(end);
    this.el.value = u;
    this.el.selectionStart = start + n;
    this.el.selectionEnd = start + n;
  }

  autoindent() {
    let curpos = this.el.selectionStart as number;
    let tabs = 0;
    while (curpos > 0) {
      curpos--;
      if (this.el.value[curpos] === '\t') {
        tabs++;
      } else if (tabs > 0 || this.el.value[curpos] === '\n') {
        break;
      }
    }
    setTimeout(() => {
      this.insertTabs(tabs);
    }, 1);
  }
}
