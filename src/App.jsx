import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  const styles = {
    light: {
      backgroundColor: "white",
      color: "black",
    },
    dark: {
      backgroundColor: "#1a1a1a",
      color: "white",
    },
  };

  return (
    <>
      <div
        style={{
          ...styles[theme],
          fontFamily: "Arial",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1>Dark Toggle Function using Props in React</h1>
        <Header />
        <Footer theme={theme} setTheme={setTheme} />
      </div>
    </>
  );
}

export default App;
