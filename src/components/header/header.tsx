import styles from './header.module.scss';
import log_out from '../../assets/log_out.png';
import { NavLink, useNavigate } from 'react-router';
import { Button } from '../button/button';
import cart from '../../assets/cart.png';

import { getUser } from '../../store/thunks/user';
import { useAppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { selectUser, setIsAuthedUser } from '../../store/slices/userSlice';
import clsx from 'clsx';
import { useEffect } from 'react';

export function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { firstName, lastName, image } = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  function handleClickLogOut() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    dispatch(setIsAuthedUser(false));
  }

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
              <div>
                <img src={cart} alt="cart" />
              </div>
            }
          ></Button>
          <div className={styles.photo}>
            <img src={image} alt="photo" />
          </div>
          <div className={styles.mainInfo}>
            <div className={styles.title}>
              <p>Good Morning</p>
            </div>
            <div className={styles.name}>
              <p>
                {firstName} {lastName}
              </p>
            </div>
          </div>
          <Button
            className={clsx(styles.button, styles.button__logOut)}
            onClick={handleClickLogOut}
            title={
              <div>
                <img src={log_out} alt="log_out" />
              </div>
            }
          ></Button>
        </div>
      </div>
    </div>
  );
}
