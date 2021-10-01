import React, { memo } from 'react';

import Message from '../../components/Message';
import Avatar from '../../components/Avatar';

import { OWNER_PROFILE_ID } from '../mock';
import './Messages.css';

const Messages = ({ messages, activeUser }) => {
  return (
    <div className="messagesWrapper">
      {messages.map((message, index) => (
        <div key={message.id}>
          {(message.senderId === activeUser?.id && messages[index -1]?.senderId !== message.senderId) && (
            <div className='chatAvatar'>
              <Avatar url={activeUser.avatarUrl} name={activeUser.name} />
              <span>{activeUser.name}</span>
            </div>
          )}
          <Message 
            text={message.body} 
            className={message.senderId === OWNER_PROFILE_ID ? 'right' : 'left'}
          />
        </div>
      ))}
    </div>
  );
}

export default memo(Messages);
