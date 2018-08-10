export as namespace tealight;

export = tealight;

declare function tealight(
  target: Array<any>,
  context: HTMLElement
): Array<HTMLElement>;

declare function tealight(
  target: string,
  context: HTMLElement
): Array<HTMLElement>;

declare function tealight(
  target: HTMLElement,
  context: HTMLElement
): Array<HTMLElement>;

declare function tealight(
  target: HTMLCollection,
  context: HTMLElement
): Array<HTMLElement>;
