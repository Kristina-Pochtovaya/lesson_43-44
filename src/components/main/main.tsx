import { Card } from '../card/card';
import styles from './main.module.scss';
import { useState, useEffect } from 'react';

export function Main() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=5')
      .then((res) => res.json())
      .then((data) => setCards(data.products));
  }, []);
  console.log(cards, 's');
  return (
    <div className={styles.base}>
      <div className={styles.contanier}>
        <div className={styles.title}>
          <p>Products List</p>
        </div>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <li key={card.id}>
              <Card
                image={card.images[0]}
                title={card.title}
                shippingInformation={card.shippingInformation}
                rating={card.rating}
                price={card.price}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
