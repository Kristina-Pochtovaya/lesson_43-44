import { useState, useCallback } from 'react';

import styles from './login.module.scss';
import clsx from 'clsx';
import { ChangeThemeButton } from '../../components/change_theme_button/change_theme_button';

import { Description } from '../../components/description/description';
import { AuthForm } from '../../components/auth_form/auth_form';
import { themes } from '../../common';

export function Login() {
  const [theme, setTheme] = useState<keyof typeof themes>(themes.dark);

  const handleClick = useCallback(
    () =>
      setTheme((prev) => (prev === themes.dark ? themes.light : themes.dark)),
    [setTheme]
  );

  return (
    <div className={clsx(styles.base, styles[`base__${theme}`])}>
      <Description />
      <AuthForm theme={theme} />
      <ChangeThemeButton
        handleClick={handleClick}
        className={styles.changeThemeButton}
        theme={theme}
      />
    </div>
  );
}
