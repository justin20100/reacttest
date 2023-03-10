import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>

                // erreur 404
                <Route path="*" element={<Notfound/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;