import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";



function App() {
  const [theme, setTheme] = useState("light");
  const fontColor = theme === "light" ? "fontBlack" : "fontWhite";
  document.body.className = theme;

  return (
    <>
     <Header theme={theme} setTheme={setTheme} fontColor={fontColor}/>
     <Main theme={theme} fontColor={fontColor}/>
     <Footer fontColor={fontColor}/>
    </>
  )
}

export default App
