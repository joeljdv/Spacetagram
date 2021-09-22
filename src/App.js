import './App.css';
import React, {useState, useEffect} from 'react';
import Image from './Image'

function App() {

  const[images, setImages] = useState({})
  const[error, setError] = useState("Wait")
  const [count, setCount] = useState("")

  // fetch images and save the data on state
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod/?start_date=2021-08-16&api_key=tgFeXzfZOcVNfMfgzR5hIIFKVzIZ77bb8GPxgE55")
    .then(r => r.json())
    .then(data => {
      setImages(data)
      setCount(data.length)
      if(count == "") {
          setError("Wait")
        }else{
          setError("")
        }
      }
    )
  }, [count])

  // create Image component for each image in state

  

  if(error !== ""){
    return(
      <div>
        <h1>Spacetagram</h1>
        <h2>Please Wait, Loading images</h2>
      </div>
    )
  } else{
    const image = images.map( i => <Image image={i} />)
    return (
      <div className="App">
        <h1>Spacetagram</h1>
        {image}
      </div>
    );
  }
}

export default App;
