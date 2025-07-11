import styles from './header.module.scss';
import photo from '../../assets/photos/photo_1.png';
import { NavLink } from 'react-router';

export function Header() {
  return (
    <div className={styles.base}>
      <div className={styles.contanier}>
        <NavLink to="/" className={styles.logo}>
          BeautyHub
        </NavLink>
        <div className={styles.content}>
          <div className={styles.photo}>
            <img src={photo} alt="photo" />
          </div>
          <div className={styles.mainInfo}>
            <div className={styles.title}>
              <p>Good Morning</p>
            </div>
            <div className={styles.name}>
              <p>Scarlet Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
