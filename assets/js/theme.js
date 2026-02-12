/**
 * Theme Toggle functionality
 * Supports: light, dark, auto (system preference)
 */

(function() {
  'use strict';
  
  const STORAGE_KEY = 'theme-preference';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';
  const THEME_AUTO = 'auto';
  
  // Get stored preference or default to auto
  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || THEME_AUTO;
    } catch (e) {
      return THEME_AUTO;
    }
  }
  
  // Store theme preference
  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Ignore storage errors
    }
  }
  
  // Apply theme to document
  function applyTheme(theme) {
    const html = document.documentElement;
    
    // Remove all theme classes
    html.removeAttribute('data-theme');
    
    // Set new theme
    if (theme === THEME_LIGHT) {
      html.setAttribute('data-theme', THEME_LIGHT);
    } else if (theme === THEME_DARK) {
      html.setAttribute('data-theme', THEME_DARK);
    } else {
      // Auto - follow system preference
      html.setAttribute('data-theme', THEME_AUTO);
    }
    
    // Update toggle button appearance
    updateToggleButton(theme);
  }
  
  // Cycle through themes: auto -> light -> dark -> auto
  function cycleTheme() {
    const currentTheme = getStoredTheme();
    let newTheme;
    
    if (currentTheme === THEME_AUTO) {
      newTheme = THEME_LIGHT;
    } else if (currentTheme === THEME_LIGHT) {
      newTheme = THEME_DARK;
    } else {
      newTheme = THEME_AUTO;
    }
    
    storeTheme(newTheme);
    applyTheme(newTheme);
  }
  
  // Update toggle button based on current theme
  function updateToggleButton(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    
    // The CSS handles the visual state based on data-theme attribute
    // This function can be extended for additional button state logic
  }
  
  // Initialize theme on page load
  function init() {
    const theme = getStoredTheme();
    applyTheme(theme);
    
    // Attach click handler to toggle button
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', cycleTheme);
    }
    
    // Listen for system theme changes when in auto mode
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', function() {
        if (getStoredTheme() === THEME_AUTO) {
          // Force re-apply to trigger CSS media query update
          applyTheme(THEME_AUTO);
        }
      });
    }
  }
  
  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
