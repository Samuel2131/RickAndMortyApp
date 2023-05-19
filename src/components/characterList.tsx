
import React, { useState, useEffect } from 'react';
import '../App.css';
import { UrlParams, useCharacter } from './customHooks';
import { CardCharacter } from './cardCharacter';
import { ButtonDiv } from './buttonDiv';
import { LoaderCardContainer } from './loadingCard';
import { SelectStatus } from './selectStatus';
import { useSearchParams, useNavigate } from "react-router-dom";


export const CharacterList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(Number(searchParams.get("page")) || 1);
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
    if(page < 42) navigate("/home?page="+(page+1));
    else alert("there are no other pages...");
  }
  const prevPage = () => {
    if(page > 1) navigate("/home?page="+(page-1));
    else alert("there are no other pages...");
  }

  const data = useCharacter(urlParams, setLoading);
  const changeText = (event: any) => setTextInput(event.target.value);

  useEffect(() => {
    setPage(Number(searchParams.get("page")));
    setLoading(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams.get("page")]);

  return (
    <div className="App">
      <header className="App-header">
      <div className="d-flex flex-row align-items-center">
        <SelectStatus setStatus={setStatus} />
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
          React.Children.toArray(data.map(({id, name, status, species, image, gender}) => {
            return (
              <CardCharacter id={id} name={name} status={status} species={species} image={image} gender={gender}/>
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