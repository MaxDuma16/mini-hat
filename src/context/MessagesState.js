import React, { useReducer } from 'react';
import messagesContext from './MessagesContext';
import messagesReducer from './messagesReducer';
import { ADD_MESSAGES, DELETE_MESSAGES, ADD_USER_NAME, ADD_CHANNEL_TITLE, ADD_CHANNEL_DESCRIPTION, CLEAR_STATE, INCREMENT_COUNTER, TOGGLE_IS_WRITES } from './messagesActions';

const MessagesState = (props) => {
  const initialState = {
    messages: [], // {messageId: 1, messageOwnerId: 1, text: 'Some text', data: {hours: 12, minutes: 33} }
    userName: "",
    channelTitle: "",
    channelDescription: "",
    imitationUserName: "Jacob",
    imitationUserCounter: 1,
    isWrites: false
  }
  const [state, dispatch] = useReducer(messagesReducer, initialState);

  const addMessage = (message) => {
    dispatch({
      type: ADD_MESSAGES,
      payload: message
    })
  }
  const deleteMessage = (messageId) => {
    dispatch({
      type: DELETE_MESSAGES,
      payload: messageId
    })
  }
  const addName = (name) => {
    dispatch({
      type: ADD_USER_NAME,
      payload: name
    })
  }
  const addTitle = (title) => {
    dispatch({
      type: ADD_CHANNEL_TITLE,
      payload: title
    })
  }
  const addDescription = (description) => {
    dispatch({
      type: ADD_CHANNEL_DESCRIPTION,
      payload: description
    })
  }
  const clearState = () => {
    dispatch({
      type: CLEAR_STATE,
      payload: initialState
    })
  }
  const IncrementCounter = () => {
    dispatch({
      type: INCREMENT_COUNTER
    })
  }
  const toggleIsWrites = (isWrites) => {
    dispatch({
      type: TOGGLE_IS_WRITES,
      payload: isWrites
    })
  }

  return (
    <messagesContext.Provider value={{
      messages: state.messages,
      userName: state.userName,
      channelTitle: state.channelTitle,
      channelDescription: state.channelDescription,
      imitationUserName: state.imitationUserName,
      imitationUserCounter: state.imitationUserCounter,
      isWrites: state.isWrites,
      addMessage,
      deleteMessage,
      addName,
      addTitle,
      addDescription,
      clearState,
      IncrementCounter,
      toggleIsWrites
    }}>
      {props.children}
    </messagesContext.Provider>
  )
};
export default MessagesState;