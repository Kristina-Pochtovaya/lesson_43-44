import clsx from 'clsx';
import { PopUp } from '../pop_up/button/pop_up';
import styles from './product_pop_up.module.scss';
import { Button } from '../button/button';
import close from '../../assets/close.png';

export type ProductPopUp = {
  isVisible: boolean;
  setIsPopupVisible: (isVisible: boolean) => void;
  image?: string;
  className?: string;
};

export function ProductPopUp({
  isVisible,
  setIsPopupVisible,
  image,
  className,
}: ProductPopUp) {
  return (
    <PopUp>
      <div
        className={clsx(
          className,
          styles.base,
          isVisible ? styles.base__visible : styles.base__hidden
        )}
      >
        <Button
          onClick={() => setIsPopupVisible(false)}
          title={
            <div className={styles.close}>
              <img src={close} alt="close" />
            </div>
          }
          className={styles.button}
        ></Button>
        <div className={styles.image}>
          <img src={image} alt="image" />
        </div>
      </div>
    </PopUp>
  );
}
