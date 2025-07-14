import { useCallback, useMemo } from 'react';
import { useState } from 'react';

import { GoogleIcon } from '../../icons/google_icon';
// import { Button } from '../button/button';
import { Input, inputTypes } from '../input/input';
import styles from './registration_form.module.scss';
import clsx from 'clsx';
import { themes } from '../../common';
import { Button } from '../button/button';
import { RegistrationButton } from '../registration_button/registration_button';

export type InputValuesType = {
  name: string;
  email: string;
  password: string;
};

export const inputIds = {
  name: 'name',
  email: 'email',
  password: 'password',
} as const;

export type RegistrationFormProps = {
  theme: keyof typeof themes;
};

export function RegistrationForm({ theme }: RegistrationFormProps) {
  const [inputValues, setInputvalues] = useState<InputValuesType>({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = useCallback(
    (value) => setInputvalues(value),
    [setInputvalues]
  );

  const handleClickCreateAccountBtn = useCallback(
    () => console.log(inputValues),
    [inputValues]
  );

  const handleClickSignUpBtn = useCallback(
    () => console.log('Sign up with Google'),
    []
  );

  const memoizedInputValues = useMemo(() => inputValues, [inputValues]);

  return (
    <div className={styles.base}>
      <div className={clsx(styles.title, styles[`title__${theme}`])}>
        <h3> Create an account</h3>
        <p>Let’s get started with your 30 days free trial</p>
      </div>

      <div className={styles.userData}>
        <Input
          theme={theme === themes.dark ? themes.light : themes.dark}
          id={inputIds.name}
          title="Name"
          type={inputTypes.text}
          handleChange={handleChange}
          value={memoizedInputValues}
        />
        <Input
          theme={theme === themes.dark ? themes.light : themes.dark}
          id={inputIds.email}
          title="Email"
          type={inputTypes.email}
          handleChange={handleChange}
          value={memoizedInputValues}
        />
        <Input
          theme={theme === themes.dark ? themes.light : themes.dark}
          id={inputIds.password}
          title="Password"
          type={inputTypes.password}
          handleChange={setInputvalues}
          value={memoizedInputValues}
        />
      </div>

      <div className={styles.buttons}>
        <RegistrationButton
          theme={theme === themes.dark ? themes.light : themes.dark}
          title="Create Account"
          handleClick={handleClickCreateAccountBtn}
        />
        <RegistrationButton
          handleClick={handleClickSignUpBtn}
          theme={theme === themes.dark ? themes.dark : themes.light}
          title="Sign up with Google"
          hasIcon={true}
          icon={
            <GoogleIcon
              classNames={{
                base: styles.google,
                fill: clsx(styles.googleFill, styles[`googleFill__${theme}`]),
              }}
            />
          }
        />
      </div>

      <div className={clsx(styles.footer, styles[`footer__${theme}`])}>
        <p>Already have an account?</p>
        <a href="#">Sign in</a>
      </div>
    </div>
  );
}
