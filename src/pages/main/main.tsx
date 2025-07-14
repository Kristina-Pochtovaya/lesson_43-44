import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/card/card';
import { selectProducts, setProducts } from '../../store/slices/productsSlice';
import { Products } from '../../types/product';
import styles from './main.module.scss';
import { useEffect } from 'react';

export function Main() {
  const dispatch = useDispatch();
  const cards = useSelector(selectProducts);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=5')
      .then((res) => res.json())
      .then((data: Products) => dispatch(setProducts(data.products)));
  }, []);

  return (
    <>
      {cards.length > 0 ? (
        <div className={styles.base}>
          <div className={styles.contanier}>
            <div className={styles.title}>
              <p>Products List</p>
            </div>
            <ul className={styles.cards}>
              {cards.map((card) => (
                <li key={card.id}>
                  <Card
                    id={card.id}
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
      ) : null}
    </>
  );
}
