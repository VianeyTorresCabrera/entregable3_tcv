import { useEffect, useRef, useState } from 'react';
import './App.css';
import UseFetch from './hooks/UseFetch';
import LocationCard from './components/LocationCard';
import ResidentCard from './components/ResidentCard';
import Paginate from './components/Paginate';

function App() {
  const randomId = Math.floor(Math.random()*126) + 1;
  const [page, setPage] = useState(1);
  const [inputValue, setinputValue] = useState(randomId);
  const [location, getLocation, isLoading, hasError] =UseFetch();

  

  useEffect(()=>{    
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`;    
    getLocation(url);
  }, [inputValue]);

  const textInput = useRef();

  const handleSubmit = (event) =>{
    event.preventDefault(); 
    setinputValue(textInput.current.value.trim().toLowerCase());
    textInput.current.value= '';  
  }

  //console.log(inputValue);

 //console.log(location);
 const quantity = 5;
 const total = Math.ceil(location?.residents.length / quantity);

 const pagination = () =>{  
  const end = quantity * page;
  const start = end - quantity;
  const loc =location?.residents.slice(start,end);
  return  loc;
 }

 
  return (
    <div className='app'>  
      {
        isLoading ?
          <>
            <div className='app_loading'>
              <div className='app_loading_title'>Loading...</div>
              <img className='app_loading_img' src="..//assets/loading2.gif" alt="" />
            </div>
          </>
          :
          <> 
            <div className='app_header_img'>        
            |
            </div>        
                                   
            <form className='app_form' onSubmit={handleSubmit}>
              <input className='app_form_input' ref={textInput} type="number" />
              <button className='app_form_btn'>Search</button>
            </form>
            {
              hasError ?
                <h2>❌Hey! you must provide an id from 1 to 126 🥹</h2>
                :
                <>
                  <LocationCard
                    info = {location}
                  />
                  <Paginate
                    page = {page}
                    setPage = {setPage}
                    total = {total}
                  />
                  <div className='app_container'>
                    {
                      pagination()?.map((character)=>(
                        <ResidentCard
                          key = {character}
                          info = {character}
                        />
                      ))
                    }
                 </div>
                </>
            }               
          </>
    }           
    </div>
  )
}

export default App;
