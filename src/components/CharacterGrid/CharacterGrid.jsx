import React from "react";
import styles from "./CharacterGrid.module.scss";
import CharacterItem from '../CharacterItem';
import Loading from '../Loading';

const CharacterGrid = ({items, isLoading}) => {
  return (
    
      isLoading ? 
      <Loading /> : 
      <section className={styles.cards}>
        {items.map(item => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
      </section>
    
  );
};

export default CharacterGrid;
