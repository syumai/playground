import { Tab } from './models';

export function splitToTabs(body: string): Tab[] {
  body.split(/-- (.+?) --/);
}

export function concatTabs(tabs: Tab[]): string {
  return tabs
    .sort((a, b) => a.order - b.order)
    .map(
      ({ file }) =>
        `-- ${file.key} --
    ${file.body}`
    )
    .join('\n\n');
}
