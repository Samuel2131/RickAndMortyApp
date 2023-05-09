import React, { useState } from 'react';
import './App.css';
import { UrlParams, useCharacter } from './components/customHooks';
import { CardCharacter } from './components/cardCharacter';
import { ButtonDiv } from './components/buttonDiv';
import { LoaderCardContainer } from './components/loadingCard';

function App() {
  const [page, setPage] = useState<number>(1);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [textInput, setTextInput] = useState<string>("");
  const [textSearch, setTextSearch] = useState<string>("");
  const [status, setStatus] = useState<"All" | "Alive" | "Dead" | "Unknown">("All");

  const urlParams: UrlParams = {
    page: page,
    name: textSearch,
    status: status
  }

  const nextPage = () => {
    if(page < 42) {
      setPage(page+1);
      setLoading(true);
    }
    else alert("there are no other pages...");
  }
  const prevPage = () => {
    if(page > 1) {
      setPage(page-1);
      setLoading(true);
    }
    else alert("there are no other pages...");
  }

  const data = useCharacter(urlParams, setLoading);
  const changeText = (event: any) => setTextInput(event.target.value);
  const changeSelect = (event: any) => setStatus(event.target.value);

  return (
    <div className="App">
      <header className="App-header">
      <div className="d-flex flex-row align-items-center">
        <select className="form-select mt-3 mx-2" style={{height: "50%", width: "80%"}} aria-label="Default select example" onChange={changeSelect}>
          <option value="All">All status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </select>
        <div className="input-group mt-3 mx-2">
          <input type="search" className="form-control rounded" placeholder="Search" value={textInput} onChange={changeText} />
          <button type="button" className="btn btn-outline-primary ms-2" onClick={() => setTextSearch(textInput)}>search</button>
        </div>
      </div>
      <h2 className='fs-1 fw-bolder'>Page number {page}</h2>
      <ButtonDiv prevPage={prevPage} nextPage={nextPage}/>
      {!isLoading ?
        (
          data.length === 0 ? <p className='fs-2 mt-3'>Invalid search...</p> :
          React.Children.toArray(data.map(({name, status, species, image, gender}) => {
            return (
              <CardCharacter name={name} status={status} species={species} img={image} gender={gender}/>
            );
          }))
        )
        : 
        <LoaderCardContainer count={20} />
      }
      </header>
    </div>
  );
}

export default App;