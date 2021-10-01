import React, { useState, useEffect, useCallback } from 'react';

import UsersList from './UsersList';
import Messages from './Messages';
import SendMessage from './SendMessage';

import { USERS, MESSAGES, OWNER_PROFILE_ID } from './mock';
import './Messenger.css';

const Messenger = () => {
  const [ activeUser, setActiveUser ] = useState(USERS[0]);
  const [ messages, setMessages ] = useState([]);

  useEffect(() => {
    setMessages(
      JSON.parse(
        JSON.stringify(MESSAGES[activeUser.id])
      )
    )
  }, [activeUser]);

  const sendMessage = useCallback((message) => {
    const newMessage = {
      id: `${messages.length + 1}`,
      date: new Date(),
      body: message,
      senderId: OWNER_PROFILE_ID
    };

    setMessages([...messages, newMessage]);

    MESSAGES[activeUser.id].push(newMessage);
  }, [activeUser, messages])

  return (
    <div className="container">
      <div className="leftSide">
        <UsersList users={USERS} activeUserID={activeUser.id} onClick={setActiveUser} />
      </div> 
      
      <div className="rightSide">
        <Messages messages={messages} activeUser={activeUser} />
        <SendMessage activeUserID={activeUser.id} onClick={sendMessage}/>
      </div>
    </div>
  );
}

export default Messenger;
