import { useEffect, useState } from 'react';

const KEY = 'ather_preview_grid';

/** Grid-line background for a preview surface (24px squares, faint on either surface). */
export const gridStyle = (dark: boolean): React.CSSProperties => ({
  backgroundImage: dark
    ? // Needs a stronger line than light mode: 5% white is near-invisible on a black or #0b0f19 surface
      'linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)'
    : 'linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)',
  backgroundSize: '24px 24px',
});

/** On/off switch for preview grid lines, shared by the Design Studio and Examples and remembered per browser. */
export function usePreviewGrid(): [boolean, (on: boolean) => void] {
  const [on, setOn] = useState(() => {
    try {
      return localStorage.getItem(KEY) !== 'off';
    } catch {
      return true;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(KEY, on ? 'on' : 'off');
    } catch {
      /* storage unavailable */
    }
  }, [on]);
  return [on, setOn];
}
