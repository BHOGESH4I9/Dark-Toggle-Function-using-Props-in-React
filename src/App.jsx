import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("light");


  return (
    <>
      <div className={`container ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}>
        <h1 className="validation-message success">Theme Toggle Demo in React</h1>
        <Header />
        <Footer theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
