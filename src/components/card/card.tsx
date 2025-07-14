import styles from './card.module.scss';
import { NavLink } from 'react-router';

import { Rating } from '../rating/rating';
import { Button } from '../button/button';

export type CardProps = {
  id: number;
  image: string;
  title: string;
  shippingInformation: string;
  rating: number | string;
  price: number;
};

export function Card({
  id,
  image,
  title,
  shippingInformation,
  rating,
  price,
}: CardProps) {
  return (
    <div className={styles.base}>
      <div className={styles.contanier}>
        <div className={styles.image}>
          <img src={image} alt="image" />
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
        <div className={styles.buttons}>
          <Button title="Add to Cart" className={styles.addButton} />
          <NavLink to={`/product/${id}`} className={styles.showButton}>
            Show more
          </NavLink>
        </div>
      </div>
    </div>
  );
}
