import { Tab } from './models';

export function splitToTabs(body: string): Tab[] {
  body.split(/-- (.+?) --/);
}

export function concatTabs(tabs: Tab[]): string {
  return tabs
    .map(
      ({ key, body }) =>
        `-- ${key} --
    ${body}`
    )
    .join('\n\n');
}
