import React from "react";
import styles from "./CharacterItem.module.scss";

const CharacterItem = ({item}) => {
  return (
    <article className={styles.card}>
      <section className={styles.cardInner}>
        <div className={styles.cardFront}>
          <img src={item.img} alt={item.name}/>
        </div>
        <div className={styles.cardBack}>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
            <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
            <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
            <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
};

export default CharacterItem;
