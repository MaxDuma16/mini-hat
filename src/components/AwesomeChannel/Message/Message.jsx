import React from 'react';
import c from "./Message.module.css";

const Message = ({deleteMessageHandle, text, userId, messageId, data: {hours, minutes}, userName}) => {
  const deleteMessageBtn = () => {
    deleteMessageHandle(messageId);
  }
  return (
    <div className={c.mainWrapper}>
      <div className={userId === 1 ? c.wrapperForMe  : c.wrapper}>
        <div className={c.inner}>
          <div>
            <div className={c.userName}>
              {userName}
            </div>
            <div className={c.text}>
              {text}
            </div>
          </div>
          <div>
            <button onClick={deleteMessageBtn} className={c.deleteCross}>
              X
            </button>
            <div className={c.timeWrapper}>
              <div className={c.time}>{hours}:</div>
              <div className={c.time}>{minutes}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message;