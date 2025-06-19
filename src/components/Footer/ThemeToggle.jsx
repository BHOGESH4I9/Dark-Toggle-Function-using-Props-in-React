import React from 'react'

const ThemeToggle = ({theme, setTheme}) => {

    const toogleFun = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        console.log('Theme Changed');
    }
  return (
    <div>
        <button onClick={toogleFun}>Chanege to dark and light mode</button>
    </div>
  )
}

export default ThemeToggle