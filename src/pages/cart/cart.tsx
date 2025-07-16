import { useSelector } from 'react-redux';
import { Card } from '../../components/card/card';

import styles from './cart.module.scss';

import { ProductType } from '../../types/product';
import { selectProductsFromCart } from '../../store/slices/cartSlice';

export function Cart() {
  const products = useSelector(selectProductsFromCart);

  return (
    <>
      {products.length > 0 ? (
        <div className={styles.base}>
          <div className={styles.contanier}>
            <div className={styles.title}>
              <p>Cart</p>
            </div>
            <ul className={styles.cards}>
              {products.map((card: ProductType) => (
                <li key={card.id}>
                  <Card
                    product={card}
                    isActionVisible={false}
                    classNames={{ card: styles.card }}
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
