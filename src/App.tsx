import React, { createContext, useState } from 'react';
import './App.css';
import { CharacterList } from './components/characterList';
import {Route, Routes, Navigate} from "react-router-dom"
import { CharacterPage } from './components/characterPage';
import { CommonContextType } from './models/contextType';

export const CommonContext = createContext<CommonContextType>({theme: "light", fontSize: 18});

const App = () => {
  const [theme, setTheme] = useState<string>("dark");
  const [fontSize, setFontSize] = useState<number>(18);
  return (
    <div className={`App ${theme === "dark" ? "theme-dark" : "theme-light"}`}>
      <CommonContext.Provider value={{theme: theme, fontSize: fontSize}}>
        <header className="App-header">
        <div className='d-flex align-items-center justify-content-center'>
          <button type="button" className="btn btn-outline-primary m-3" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>theme</button>
          <button type="button" className="btn btn-outline-primary m-3" onClick={() => setFontSize(fontSize === 48 ? 48 : fontSize+6)}>+</button>
          <button type="button" className="btn btn-outline-primary m-3" onClick={() => setFontSize(fontSize === 18 ? 18 : fontSize-6)}>-</button>
        </div>
          <Routes>
            <Route path='/' element={<Navigate to="/home?page=1" />} />
            <Route path="/home" Component={CharacterList}/>
            <Route path='/home/:id' Component={CharacterPage}/>
          </Routes>
        </header>
      </CommonContext.Provider>
    </div>
  );
}

export default App;