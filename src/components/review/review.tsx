import { Rating } from '../rating/rating';
import styles from './review.module.scss';

export type ReviewProps = {
  rating: number;
  comment: string;
  name: string;
  date: Date;
};

export function Review({ rating, comment, name, date }: ReviewProps) {
  return (
    <div className={styles.base}>
      <div className={styles.contanier}>
        <div className={styles.rating}>
          <Rating />
          <p className={styles.ratingValue}>{rating}</p>
        </div>
        <div className={styles.comment}>
          <p>{comment}</p>
        </div>
        <div className={styles.date}>
          <p>{new Date(date).toLocaleString()}</p>
        </div>
        <div className={styles.name}>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
}
