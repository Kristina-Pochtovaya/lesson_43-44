import clsx from 'clsx';
import styles from './button.module.scss';
import React from 'react';

export type ButtonProps = {
  title: string | React.ReactElement;
  className?: string;
  onClick?: () => void;
};

export function Button({ title, onClick, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(className, styles.base)}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
