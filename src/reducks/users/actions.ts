export type U = {
  isSignedIn: boolean;
  uid: string;
  username: string;
};

export const SIGN_IN = 'SIGN_IN';
export const signInAction = (userState: U) => {
  return {
    type: 'SIGN_IN',
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  };
};

export const SIGN_OUT = 'SIGN_OUT';
export const signOutAction: () => void = () => {
  return {
    type: 'SIGN_OUT',
    payload: {
      isSignedIn: false,
      uid: '',
      username: '',
    },
  };
};
