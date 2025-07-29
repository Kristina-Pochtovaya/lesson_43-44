import { useSelector } from 'react-redux';
import { Card } from '../../components/card/card';
import { selectProducts } from '../../store/slices/productsSlice';
import styles from './products.module.scss';
import { useEffect } from 'react';
import { getProducts } from '../../store/thunks/products';
import { useAppDispatch } from '../../store/store';
import { ProductType } from '../../types/product';

export function Products() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const { isLoading, products, hasError } = useSelector(selectProducts);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (hasError) {
    return <div>Opps, something went wrong, please try later!</div>;
  }

  return (
    <>
      {products.length > 0 ? (
        <div className={styles.base}>
          <div className={styles.contanier}>
            <div className={styles.title}>
              <p>Products List</p>
            </div>
            <ul className={styles.cards}>
              {products.map((card: ProductType) => (
                <li key={card.id}>
                  <Card product={card} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
