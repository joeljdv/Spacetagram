import './App.css';
import React, {useState, useEffect} from 'react';
import Image from './Image'

function App() {

  const[images, setImages] = useState({})
  const[error, setError] = useState("Wait")
  const [count, setCount] = useState("")
  const [fact, setFact] = useState("")


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

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
    .then(r => r.json())
    .then(data => {
      setFact(data)
    })
  }, [])

  // check if we got the data from the api, if not render "please wait" and when data is good render images

  if(error !== ""){
    return(
      <div className="App">
        <h1>Spacetagram</h1>
        <p className='copyright'> Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
        <h2>Please Wait, Loading images</h2>
        <h3>Here is a quick cat fact:</h3>
        <p className='fact'>{fact.fact}</p>
      </div>
    )
  } else{
    const image = images.map( i => <Image image={i} />)
    return (
      <div className="App">
        <h1>Spacetagram</h1>
        <p className="copyright"> Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
        {image}
      </div>
    );
  }
}

export default App;
