import React, { memo } from 'react';
import cn from 'classnames';

import './Message.css';

const Message = ({ text, className }) => {
  return (
    <div className={cn("messageWrapper", className)}>
      <div className="message">
        <span className="messageText">{text}</span> 
      </div>
    </div>
  );
}

export default memo(Message);
