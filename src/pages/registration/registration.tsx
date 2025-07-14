import { useState, useCallback } from 'react';

import styles from './registration.module.scss';
import clsx from 'clsx';
import { ChangeThemeButton } from '../../components/change_theme_button/change_theme_button';

import { Description } from '../../components/description/description';
import { RegistrationForm } from '../../components/registration_form/registration_form';
import { themes } from '../../common';

export function Registration() {
  const [theme, setTheme] = useState<keyof typeof themes>(themes.dark);

  const handleClick = useCallback(
    () =>
      setTheme((prev) => (prev === themes.dark ? themes.light : themes.dark)),
    [setTheme]
  );

  return (
    <div className={clsx(styles.base, styles[`base__${theme}`])}>
      <Description />
      <RegistrationForm theme={theme} />
      <ChangeThemeButton
        handleClick={handleClick}
        className={styles.changeThemeButton}
        theme={theme}
      />
    </div>
  );
}
