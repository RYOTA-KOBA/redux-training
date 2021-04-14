import React from 'react';
import { getUserId, getUsername } from '../reducks/users/selectors';
import { useSelector } from 'react-redux';

const Home: React.FC = () => {
  const selector = useSelector((state) => state);
  const uid = getUserId(selector);
  const username = getUsername(selector);

  return (
    <div>
      <h2>Home</h2>
      <p>ID: {uid}</p>
      <p>NAME: {username}</p>
    </div>
  );
};

export default Home;
