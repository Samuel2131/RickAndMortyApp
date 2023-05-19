import React from 'react';
import './App.css';
import { CharacterList } from './components/characterList';
import {Route, Routes, Navigate} from "react-router-dom"
import { CharacterPage } from './components/characterPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Navigate to="/home?page=1" />} />
          <Route path="/home" Component={CharacterList}/>
          <Route path='/home/:id' Component={CharacterPage}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;