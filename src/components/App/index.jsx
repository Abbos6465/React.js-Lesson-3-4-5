import React from "react";
import "./App.scss";
import Header from "../Header";
import Footer from "../Footer";
import Intro from "../Intro";
import About from "../../pages/About";
import { BrowserRouter,Route,Routes} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/task" element={<Intro/> } />
          </Routes>

        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
