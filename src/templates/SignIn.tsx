import React, { useState, useCallback } from 'react';
import { TextInput, PrimaryButton } from '../components/UIkit/index';
import { signIn } from '../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(''),
    [password, setPassword] = useState('');

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text-center u-text__headline">サインイン</h2>
      <div className="module-spacer--medium">
        <TextInput
          fullWidth={true}
          label={'メールアドレス'}
          multiline={false}
          required={true}
          rows={1}
          value={email}
          type={'email'}
          onChange={inputEmail}
        />
        <TextInput
          fullWidth={true}
          label={'パスワード'}
          multiline={false}
          required={true}
          rows={1}
          value={password}
          type={'password'}
          onChange={inputPassword}
        />
        <div className="module-spacer--medium" />
        <div className="center">
          <PrimaryButton
            label={'SignIn'}
            onClick={() => dispatch(signIn(email, password))}
          />
        </div>
        <div className="module-spacer--medium" />
        <p onClick={() => dispatch(push('/signup'))}>
          アカウントをお持ちで無い方はこちら
        </p>
        <div className="module-spacer--medium" />
        <p onClick={() => dispatch(push('/signin/reset'))}>
          パスワードを忘れた方はこちら
        </p>
      </div>
    </div>
  );
};

export default SignIn;
