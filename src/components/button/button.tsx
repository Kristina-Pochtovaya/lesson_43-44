import clsx from 'clsx';
import styles from './button.module.scss';

export type ButtonProps = {
  title: string;
  className?: string;
};

export function Button({ title, className }: ButtonProps) {
  return (
    <button type="button" className={clsx(className, styles.base)}>
      {title}
    </button>
  );
}
