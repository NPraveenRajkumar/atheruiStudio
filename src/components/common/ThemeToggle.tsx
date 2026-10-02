import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

/** Segmented Light / Dark switch for the whole app (and the component library). */
export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, setTheme } = useTheme();
  const options = [
    { id: 'light', label: 'Light', Icon: Sun },
    { id: 'dark', label: 'Dark', Icon: Moon },
  ] as const;

  return (
    <div
      role="group"
      aria-label="Theme"
      className={`flex items-center p-0.5 rounded-lg bg-slate-900 border border-slate-800 ${className}`}
    >
      {options.map(({ id, label, Icon }) => {
        const active = theme === id;
        return (
          <button
            key={id}
            onClick={() => setTheme(id)}
            aria-pressed={active}
            title={`${label} theme`}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              active ? 'bg-sky-500/20 text-sky-300 border border-sky-400/40' : 'text-slate-400 hover:text-white border border-transparent'
            }`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
};
