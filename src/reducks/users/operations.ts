import { signInAction } from './actions';
import { push } from 'connected-react-router';
import { Dispatch } from 'redux';

export const signIn = () => {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return async (dispatch: Dispatch, getState: () => any) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = 'https://api.github.com/users/RYOTA-KOBA';

      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);
      const username = response.login;

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: '00001',
          username: username,
        })
      );
      dispatch(push('/'));
    }
  };
};
