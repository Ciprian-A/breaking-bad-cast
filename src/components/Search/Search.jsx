import React, {useState}  from "react";
import styles from "./Search.module.scss";

const Search = ({getQuery}) => {
  const [text, setText] = useState('')
  const handleChange = (query) => {
    setText(query)
    getQuery(query)
  }
  return (
    <section className={styles.search}>
      <form>
        <input 
          type="text"  
          placeholder='Search characters...'
          value={text}
          onChange={(e) => handleChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
