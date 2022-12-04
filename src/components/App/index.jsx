import React, { createContext } from "react";
import "./App.scss";
import Header from "../Header";
import Footer from "../Footer";
import Intro from "../Intro";
import About from "../../pages/About";
import Error from "../Error";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import {lang} from "../../lang";
import {context} from "../../context";
import { useState } from "react";


const App = () => {
  const [theme,setTheme] = useState("light");
  const toggleTheme = () =>{
    setTheme((curr)=>(curr==="light" ? "dark" : "light"))
  }

  const [langs,setLangs] = useState(localStorage.getItem('lang') || 'en')
  return (  
    <div>
     <context.Provider value={{lang,langs,setLangs,theme,toggleTheme}}>
       <BrowserRouter>
          <div className="App" id={theme}>
          <Header />
            <main>
              <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/task" element={<Intro/> } />
                <Route path="*" element={<Error/>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
     </context.Provider> 
    </div>
  );
};

export default App;
