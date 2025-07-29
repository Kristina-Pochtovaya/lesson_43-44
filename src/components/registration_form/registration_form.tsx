import { useCallback, useEffect, useMemo } from 'react';
import { useState } from 'react';

import { GoogleIcon } from '../../icons/google_icon';
import { Input, inputTypes } from '../input/input';
import styles from './registration_form.module.scss';
import clsx from 'clsx';
import { themes } from '../../common';
import { Button } from '../button/button';
import { RegistrationButton } from '../registration_button/registration_button';

import { CredentialsType } from '../../types/user';
import { useAppDispatch } from '../../store/store';
import { loginUser } from '../../store/thunks/user';
import { useNavigate } from 'react-router';

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
  const [loginActive, setLoginActive] = useState(true);
  const [inputValues, setInputvalues] = useState<InputValuesType>({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = useCallback(
    (value) => {
      setInputvalues(value);
    },
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

  const handleLoginBtn = useCallback(() => {
    const credentails: CredentialsType = {
      username: inputValues.name,
      password: inputValues.password,
    };

    dispatch(loginUser(credentails));
    navigate('/products');
  }, [inputValues.name, inputValues.password]);

  const memoizedInputValues = useMemo(() => inputValues, [inputValues]);

  return (
    <div className={styles.base}>
      <div className={clsx(styles.title, styles[`title__${theme}`])}>
        <h3> {loginActive ? 'Sign In' : ' Create an account'}</h3>
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
        {!loginActive && (
          <Input
            theme={theme === themes.dark ? themes.light : themes.dark}
            id={inputIds.email}
            title="Email"
            type={inputTypes.email}
            handleChange={handleChange}
            value={memoizedInputValues}
          />
        )}
        <Input
          theme={theme === themes.dark ? themes.light : themes.dark}
          id={inputIds.password}
          title="Password"
          type={inputTypes.password}
          handleChange={handleChange}
          value={memoizedInputValues}
        />
      </div>

      <div className={styles.buttons}>
        <RegistrationButton
          theme={theme === themes.dark ? themes.light : themes.dark}
          title={loginActive ? 'Sign in' : 'Create Account'}
          handleClick={
            loginActive ? handleLoginBtn : handleClickCreateAccountBtn
          }
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
        <Button
          className={styles.button}
          title={loginActive ? 'Sign in' : 'Register'}
          onClick={() => setLoginActive(loginActive ? false : true)}
        />
      </div>
    </div>
  );
}
