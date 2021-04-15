import React, { useState, useCallback } from 'react';
import { TextInput, PrimaryButton } from '../components/UIkit/index';
import { resetPassword } from '../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

const Reset: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text-center u-text__headline">パスワードのリセット</h2>
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
        <div className="module-spacer--medium" />
        <div className="center">
          <PrimaryButton
            label={'Reset Password'}
            onClick={() => dispatch(resetPassword(email))}
          />
        </div>
        <div className="module-spacer--medium" />
        <a onClick={() => dispatch(push('/signin'))}>ログイン画面に戻る</a>
      </div>
    </div>
  );
};

export default Reset;