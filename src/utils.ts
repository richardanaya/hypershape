import { MetaverseHudSpace } from "./mv-hud";
import { MetaverseSpace } from "./mv-space";

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

export function getParentSpace(el: HTMLElement) {
  const parentSpaceEl = findParent(
    el,
    (e) => e instanceof MetaverseSpace || e instanceof MetaverseHudSpace
  ) as MetaverseSpace;
  if (parentSpaceEl === null) {
    throw new Error("No parent space found for mv-model");
  }
  const parentSpace = parentSpaceEl.space;
  return parentSpace;
}

export function isInHudSpace(el: HTMLElement) {
  const parentSpaceEl = findParent(
    el,
    (e) => e instanceof MetaverseHudSpace
  ) as MetaverseHudSpace;
  return parentSpaceEl !== null;
}
