import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search';


import styles from './App.module.scss';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${name}`)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems();
  }, [name])

  return (
    <div className={styles.AppContainer}>
     <Header />
     <Search getQuery={(query) => setName(query)}/>
     <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
