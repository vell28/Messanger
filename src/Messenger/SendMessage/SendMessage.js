import React, { memo, useState, useRef, useEffect } from 'react';

import { PLACEHOLDER } from './const';
import './SendMessage.css';

const SendMessage = ({ activeUserID, onClick }) => {
  const [ message, setMessage ] = useState('');

  const ref = useRef();

  useEffect(() => {
    ref?.current?.focus();
  }, [activeUserID])

  const onChange = (event) => {
    const value = event.target.value;
    setMessage(value);
  }

  const handleKeyUp = (event) => {
    const value = message.trim();
    if (event.keyCode === 13 && !event.ctrlKey && value) {
      onClick(value);
      setMessage('');
    }
  }

  const handleClick = () => {
    onClick(message);
    setMessage('');
  }

  return (
    <div className="sendMessageWrapper">
      <textarea
        ref={ref}
        name="message"
        value={message}
        placeholder={PLACEHOLDER}
        onChange={onChange}
        onKeyUp={handleKeyUp}
      />
      {message.trim() && 
        <button onClick={handleClick}>
          Send  
        </button>
      }
    </div>
  );
}

export default memo(SendMessage);
