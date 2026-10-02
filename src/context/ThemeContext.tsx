import React, { createContext, useContext, useState, useEffect } from 'react';

type SiteTheme = 'light' | 'dark';

interface ThemeContextType {
  theme: SiteTheme;
  toggleTheme: () => void;
  setTheme: (theme: SiteTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<SiteTheme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ather_site_theme') as SiteTheme;
      if (saved === 'light' || saved === 'dark') return saved;
      // Default to dark as requested in initial prompt, but fully supporting light
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('ather_site_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: SiteTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
