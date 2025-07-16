import styles from './header.module.scss';
import photo from '../../assets/photos/photo_1.png';
import { NavLink, useNavigate } from 'react-router';
import { Button } from '../button/button';
import cart from '../../assets/cart.png';

export function Header() {
  const navigate = useNavigate();

  return (
    <div className={styles.base}>
      <div className={styles.contanier}>
        <NavLink to="/" className={styles.logo}>
          BeautyHub
        </NavLink>
        <div className={styles.content}>
          <Button
            className={styles.button}
            onClick={() => navigate('/cart')}
            title={
              <div className={styles.cart}>
                <img src={cart} alt="cart" />
              </div>
            }
          ></Button>
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
