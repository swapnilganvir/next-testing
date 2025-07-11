'use client';
import React from 'react';
import { useTheme } from '@/context/ThemeProvider';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  // Icon for a 'neutral' or 'default' state
  const NeutralIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );

  // Moon icon for light theme (suggesting switch to dark)
  const MoonIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-moon"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );

  // Sun icon for dark theme (suggesting switch to light)
  const SunIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-sun"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M4.93 19.07l1.41-1.41" />
      <path d="M17.66 6.34l1.41-1.41" />
    </svg>
  );

  let currentIcon;
  if (theme === 'default') {
    currentIcon = <NeutralIcon />; // Show neutral icon when in default state
  } else if (theme === 'light') {
    currentIcon = <MoonIcon />; // Show moon to suggest switching to dark
  } else {
    // theme === 'dark'
    currentIcon = <SunIcon />; // Show sun to suggest switching to light
  }

  return (
    <button onClick={toggleTheme} className="p-3 rounded-full bg-primary-900">
      {currentIcon}
    </button>
  );
};

export default ThemeSwitcher;
