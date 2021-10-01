import React, { memo } from 'react';

import User from '../../components/User';

const UsersList = ({ users, activeUserID, onClick }) => {
  return (
    <>
      {users.map(user => (
        <User
          key={user.id} 
          avatarUrl={user.avatarUrl} 
          name={user.name} 
          className={activeUserID === user.id ? 'active': ''}
          onClick={() => onClick(user)}
        />
      ))}
    </>
  );
}

export default memo(UsersList);
