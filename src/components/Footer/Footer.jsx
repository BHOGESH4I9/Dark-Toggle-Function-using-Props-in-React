import React from 'react'
import ThemeToggle from './ThemeToggle'

const Footer = ({theme, setTheme}) => {
  return (
    <div>
        <h2>Foot section here props are assigning to Toggle Button</h2>
        <ThemeToggle theme={theme} setTheme = {setTheme}/>
    </div>
  )
}

export default Footer