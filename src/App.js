import './App.css';
import React, {useState, useEffect} from 'react';
import Image from './Image'

function App() {

  const[images, setImages] = useState({})

  // fetch images and save the data on state
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod/?start_date=2021-08-16&api_key=tgFeXzfZOcVNfMfgzR5hIIFKVzIZ77bb8GPxgE55")
    .then(r => r.json())
    .then(data => {
      setImages(data)
    })
    console.log("OK")
  }, [])

  // create Image component for each image in state

  const image = images.map( i => <Image key={i.id} image={i} />)

  return (
    <div className="App">
      <h1>Spacetagram</h1>
      {image}
    </div>
  );
}

export default App;
