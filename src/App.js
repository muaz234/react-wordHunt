import logo from './logo.svg';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState("en")
  const dictionaryAPI  = async () => {
    try {
      let data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      setMeanings(data.data);
    } catch (error) {
      console.log('error is  ---->  ', error)
    }
  }
  console.table(meanings);
  useEffect(() => { dictionaryAPI()}, [word, category])
  return (
    <div className="App" style={{ height: '100vh', backgroundColor: '#282c34', color: 'white'}}>
      <Container maxWidth="md" style={{display: "flex", flexDirection: "column", height: "100vh"}}>
        Dictionary
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
          {meanings && (
               <Definitions word={word} meanings={meanings} category={category} />
          )}
      </Container>
    </div>
  );
}

export default App;
