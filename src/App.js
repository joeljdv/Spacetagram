import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const[images, setImages] = useState({})

  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod/?start_date=2021-08-16&api_key=tgFeXzfZOcVNfMfgzR5hIIFKVzIZ77bb8GPxgE55")
    .then(r => r.json())
    .then(data => {
      setImages(data)
    })
    console.log("OK")
  }, [])

  return (
    <div className="App">
      <h1>Spacetagram</h1>
    </div>
  );
}

export default App;
