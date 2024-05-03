import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import { Progress } from "./components/ui/progress";
import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
     <ThemeContextDefaultProvider>
         <Navbar/>
        <MainPage/>
      </ThemeContextDefaultProvider>
     
    </>
  )
}

export default App
