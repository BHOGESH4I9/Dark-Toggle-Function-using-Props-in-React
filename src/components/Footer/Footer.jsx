import React from 'react'
import ThemeToggle from './ThemeToggle'

const Footer = ({theme, setTheme}) => {
  return (
    <div className="footer-section">
      <h2 className="validation-message info">Theme Control Panel</h2>
      <p>Click the button to switch themes.</p>
      <ThemeToggle theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default Footer