import styles from './card.module.scss';
import { NavLink } from 'react-router';

import { Rating } from '../rating/rating';
import { Button } from '../button/button';
import { useDispatch } from 'react-redux';
import { ProductType } from '../../types/product';
import { addToCart } from '../../store/slices/cartSlice';
import clsx from 'clsx';

export type CardProps = {
  product: ProductType;
  isActionVisible?: boolean;
  classNames?: {
    card?: string;
  };
};

export function Card({
  product,
  classNames,
  isActionVisible = true,
}: CardProps) {
  const { id, images, title, shippingInformation, rating, price } = product;
  const dispatch = useDispatch();
  return (
    <div className={clsx(styles.base, classNames?.card)}>
      <div className={styles.contanier}>
        <div className={styles.image}>
          <img src={images[0]} alt="image" />
        </div>
        <div className={styles.mainInformation}>
          <div className={styles.description}>
            <div className={styles.title}>
              <p>{title}</p>
            </div>
            <div className={styles.shippingInformation}>
              <p>{shippingInformation}</p>
            </div>
            <div className={styles.rating}>
              <Rating className={styles.ratingIcon} />
              <p>{rating}</p>
            </div>
          </div>
          <div className={styles.price}>
            <p>₹ {parseFloat(price.toFixed(2))}</p>
          </div>
        </div>

        <div
          className={clsx(
            styles.buttons,
            !isActionVisible && styles.buttons__hidden
          )}
        >
          <Button
            title="Add to Cart"
            className={styles.addButton}
            onClick={() => dispatch(addToCart(product))}
          />
          <NavLink to={`/product/${id}`} className={styles.showButton}>
            Show more
          </NavLink>
        </div>
      </div>
    </div>
  );
}
