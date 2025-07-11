import clsx from 'clsx';
import styles from './rating.module.scss';
import ratingicon from '../../assets/photos/rating.png';

export type RatingProps = {
  className?: string;
};

export function Rating({ className }: RatingProps) {
  return (
    <div className={clsx(className ? className : styles.base)}>
      <img src={ratingicon} alt="image" />
    </div>
  );
}
