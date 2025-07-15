import clsx from 'clsx';
import styles from './pop_up.module.scss';
import { createPortal } from 'react-dom';

export type PopUpProps = {
  children: React.ReactNode;
  className?: string;
};

export function PopUp({ children, className }: PopUpProps) {
  return createPortal(
    <div className={clsx(className, styles.base)}>{children}</div>,
    document.getElementById('popup-root')
  );
}
