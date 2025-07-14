import React from 'react';
import clsx from 'clsx';
import styles from './input.module.scss';
import {
  inputIds,
  InputValuesType,
} from '../registration_form/registration_form';
import { themes } from '../../common';

export const inputTypes = {
  text: 'text',
  email: 'email',
  password: 'password',
} as const;

export type InputProps = {
  theme: keyof typeof themes;
  id: keyof typeof inputIds;
  title: string;
  handleChange: (value: InputValuesType) => void;
  value: InputValuesType;
  type: keyof typeof inputTypes;
  className?: string;
};

export function Input({
  theme,
  id,
  title,
  handleChange,
  type,
  value,
  className,
}: InputProps) {
  return (
    <div className={clsx(styles.base, className)}>
      <label
        className={clsx(styles.label, styles[`label__${theme}`])}
        htmlFor={id}
      >
        {title}
      </label>
      <input
        id={id}
        type={type}
        value={value[id]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChange({ ...value, [id]: e.target.value })
        }
      />
    </div>
  );
}
