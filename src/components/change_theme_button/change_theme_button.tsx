import clsx from 'clsx';
import styles from './change_theme_button.module.scss';

import { SunIcon } from '../../icons/sun_icon';
import { MoonIcon } from '../../icons/moon_icon';

import { MouseEventHandler } from 'react';
import { themes } from '../../common';

export type ChangeThemeButtonProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  theme?: keyof typeof themes;
  className?: string;
};

export function ChangeThemeButton({
  handleClick,
  theme = themes.dark,
  className,
}: ChangeThemeButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(styles.base, styles[`base__${theme}`], className)}
    >
      {theme === themes.dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
