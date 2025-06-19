import React from 'react'

const ThemeToggle = ({theme, setTheme}) => {
  const toggleFun = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    console.log('Theme Changed');
  };

  return (
    <div className="toggle-container">
      <button onClick={toggleFun}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeToggle