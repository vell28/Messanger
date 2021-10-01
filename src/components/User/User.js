import React, { memo } from 'react';
import cn from 'classnames';

import Avatar from '../Avatar';

import './User.css';

const User = ({ avatarUrl, name, className, onClick }) => {
  return (
    <div className={cn("userWrapper", className)} onClick={onClick}>
      <Avatar url={avatarUrl} name={name} />
      <span className="userName">{name}</span>  
    </div>
  );
}

export default memo(User);
