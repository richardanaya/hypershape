import { MetaverseHudSpace } from "./mv-hud";
import { MetaverseImage } from "./mv-image";
import { MetaverseModel } from "./mv-model";
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

export function getInteractableChildren(el: HTMLElement) {
  const interactables = [];
  const children = el.children;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child instanceof MetaverseModel || child instanceof MetaverseImage) {
      interactables.push(child);
    }
  }
  return interactables;
}
