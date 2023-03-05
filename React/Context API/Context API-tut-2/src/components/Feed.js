import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Feed = () => {

    const {message} = useContext(AppContext);

  return (
    <div>
        <h2>Feed Page</h2>
        <p>{message}</p>
    </div>
  )
}

export default Feed