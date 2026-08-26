export const DEFAULT_STRENGTH = 0.3;
export const MAGNETIC_TRANSITION =
  "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)";

export function getMagneticOffset(
  clientX: number,
  clientY: number,
  rect: DOMRect,
  strength: number = DEFAULT_STRENGTH
): { x: number; y: number } {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const deltaX = (clientX - centerX) * strength;
  const deltaY = (clientY - centerY) * strength;
  return { x: deltaX, y: deltaY };
}

export function getMagneticTransform(offset: { x: number; y: number }): string {
  return `translate3d(${offset.x}px, ${offset.y}px, 0)`;
}

export function getMagneticRestTransform(): string {
  return "translate3d(0px, 0px, 0px)";
}
