import React, { useState } from 'react';
import { LoadImages, SearchImages } from './components/api.js';
import './App.css';
import Image from './components/image.js';

function App() {
  const [query, setQuery] = useState();
  const [item, setItem] = useState();
  const data = LoadImages();
  //console.log(query);

  const search = () => {
    setItem(query);
  }
  const searchData = SearchImages(item);
  //console.log(SearchImages(item));
  return (
    <div className="App">
      <div className="Header">
        <h1>Snap Shot</h1>
      </div>
      <div className="content">
        <input className="inputBox"type="text" onChange={((event) => setQuery(event.target.value))} placeholder="Search images here..."/>
        {/* can also be written as */}
        {/* <input type="text" onChange={({ target: { value } }) => setQuery(value)}/> */}

        <button className="btn" onClick={search}>Search</button>
      </div>
      <div className="imageContainer">
        {item ? 
          (
            searchData.map((img, key) =>(<Image src={img.urls.thumb} key={key} />))
            ) : (
            data.map((img, key) => (<Image src={img.urls.thumb} key={key} />))
          )        
        }

      </div>
    </div>
  );
}

export default App;
