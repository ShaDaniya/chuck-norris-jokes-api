import { useEffect, useState } from 'react';
import chuckNorris from './assets/chuck-norris.jpeg'

const API_URL = "https://api.chucknorris.io/jokes/random"

function App() {
  const [joke, setJoke] = useState('')

  const generateJoke = () => {
    fetch(API_URL)
      .then (res => res.json())
      .then (data => setJoke(data.value))
  }

  useEffect(() => {
    generateJoke()
  }, [])

  return (
    <div className="box">
      <h2>Chuck Norris Jokes Generator</h2>
      <div>
        <img src={chuckNorris} alt="" />
      </div>
      <p>{joke}</p>
      <button onClick={generateJoke}>Get new joke 😺  </button>
    </div>
  );
}

export default App;
