import styles from './card.module.scss';
import ratingicon from '../../assets/photos/rating.png';

export type CardProps = {
  image: string;
  title: string;
  shippingInformation: string;
  rating: number | string;
  price: number;
};

export function Card({
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
              <div className={styles.ratingIcon}>
                <img src={ratingicon} alt="image" />
              </div>
              <p>{rating}</p>
            </div>
          </div>
          <div className={styles.price}>
            <p>₹ {parseFloat(price.toFixed(2))}</p>
          </div>
        </div>

        <div className={styles.buttons}>
          <button type="button" className={styles.addButton}>
            Add To Cart
          </button>
          <button type="button" className={styles.showButton}>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
