export function findParent(
  e: HTMLElement,
  criteria: (e: HTMLElement) => boolean
): HTMLElement | null {
  let parent = e.parentElement;
  while (parent !== null) {
    if (criteria(parent)) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
}
