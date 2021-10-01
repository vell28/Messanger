import React, { memo } from 'react';

import './Avatar.css';

const Avatar = ({ url, name }) => {
  return (
    <img src={url} alt={name} className="avatar" />
  );
}

export default memo(Avatar);
