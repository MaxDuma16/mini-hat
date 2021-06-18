import React, {useState, useContext} from 'react';
import c from "./AwesomeChannel.module.css";
import Message from './Message/Message';
import { withRouter } from "react-router";
import MessagesContext from '../../context/MessagesContext';
import {createMessage} from '../common/createMessage';
import { imitationUser } from '../common/imitationUser';

const AwesomeChannel = (props) => {
  const { messages, userName, channelTitle, channelDescription, addMessage, deleteMessage, clearState, imitationUserName, imitationUserCounter, IncrementCounter, toggleIsWrites, isWrites } = useContext(MessagesContext);
  const [textareaValue, setTextareaValue] = useState("");
  const onTextarea = (event) => {
    setTextareaValue(event.target.value);
  }
  const handleLogout = () => {
    props.history.push('/login');
    clearState();
  }
  const handleSend = () => {
    if (textareaValue) {
      const countMessages = messages.length;
      const message = createMessage(textareaValue, countMessages);
      addMessage(message);
      setTextareaValue("");
      //imitation of another user
      imitationUser(countMessages, userName, channelTitle, channelDescription, addMessage, deleteMessage, imitationUserName, imitationUserCounter, IncrementCounter, toggleIsWrites);
    }
  }
  const deleteMessageHandle = (messageId) => {
    deleteMessage(messageId);
  }
  const renderMessages = messages.map(m => {
    return <div className={m.messageOwnerId === 1 ? c.messageWrapperForMe : c.messageWrapper}>
      <Message key={m.messageId} text={m.text} userId={m.messageOwnerId} messageId={m.messageId} data={m.data} deleteMessageHandle={deleteMessageHandle} userName={m.messageOwnerId === 1 ? userName : imitationUserName} />
    </div>
  })
  const noMessages = 'No messages :('
  const noMessagesAdvice = 'Write the first message!'
  
  return (
    <div className={c.wrapper}>
      <div className={c.headerWrapper}>
        <div>
          <div className={c.headerMain}>
            <h2>Your awesome channel</h2>
            <button onClick={handleLogout} className={c.btnLogout}>Logout</button>
          </div>
          <div className={c.channelData}>
          <div>
            <div className={c.anotherUserName}>{imitationUserName}</div>
            <div className={isWrites ? c.isWritesTrue : c.isWritesFalse }>Writes a message...</div> 
          </div>
          <div>
            <div className={c.channelTitle}>{channelTitle}</div>
            <div className={c.channelDescription}>{channelDescription}</div>
          </div>
          </div>
        </div>
      </div>
      <div className={c.bodyWrapper}>
        {renderMessages.length === 0 ?  <div className={c.noMessages}>{noMessages}<br/>{noMessagesAdvice}</div> : renderMessages}
      </div>
      <div className={c.sendBlockWrapper}>
        <textarea 
          placeholder="Type your message..." 
          name="message"
          onChange={onTextarea}
          value={textareaValue}
          className={c.textarea}
          />
        <button onClick={handleSend} className={c.btnSend} type="submit">Send</button>
      </div>
    </div>
  )
};
export default withRouter(AwesomeChannel);